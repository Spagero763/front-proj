import { useState, useEffect } from "react";

interface MarketData {
  name: string;
  price: number;
  priceChange: number;
  volume: string;
  error?: string;
}

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = RETRY_DELAY_MS
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 1) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(fn, retries - 1, delay * 2); // exponential backoff
  }
}

export async function fetchMarketData(symbol: string): Promise<MarketData> {
  return fetchWithRetry(async () => {
    const response = await fetch(`/api/yahoo-finance?symbols=${symbol}`);
    if (!response.ok) throw new Error("Failed to fetch market data");

    const data = await response.json();
    const quote = data.chart.result[0];
    const latestPrice = quote.meta.regularMarketPrice;
    const previousClose =
      quote.meta.previousClose || quote.meta.chartPreviousClose;
    const priceChange = ((latestPrice - previousClose) / previousClose) * 100;
    const volume =
      quote.indicators.quote[0].volume[
        quote.indicators.quote[0].volume.length - 1
      ];

    return {
      name: quote.meta.shortName,
      price: latestPrice,
      priceChange: parseFloat(priceChange.toFixed(2)),
      volume: new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(volume),
    };
  }).catch(error => {
    console.error("Error fetching market data:", error);
    return {
      name: "",
      price: 0,
      priceChange: 0,
      volume: "0",
      error: "Failed to fetch market data",
    };
  });
}

export function useMarketData(symbol: string) {
  const [marketData, setMarketData] = useState<MarketData>({
    name: "",
    price: 0,
    priceChange: 0,
    volume: "0",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateMarketData = async () => {
      setIsLoading(true);
      const data = await fetchMarketData(symbol);
      setMarketData(data);
      setIsLoading(false);
    };

    // Fetch immediately
    updateMarketData();

    // Then fetch every 15 seconds
    const intervalId = setInterval(updateMarketData, 15000);

    return () => clearInterval(intervalId);
  }, [symbol]);

  return {
    marketData,
    isLoading,
  };
}

export async function fetchBatchMarketData(
  symbols: string[]
): Promise<Record<string, MarketData>> {
  try {
    // Create a comma-separated list of symbols
    const symbolsString = symbols.join(",");

    // Make a single API call for all symbols
    const response = await fetch(`/api/yahoo-finance?symbols=${symbolsString}`);
    if (!response.ok) throw new Error("Failed to fetch batch market data");

    const data = await response.json();
    return data; // This would return a map of symbol to market data
  } catch (error) {
    console.error("Error fetching batch market data:", error);
    throw error;
  }
}
