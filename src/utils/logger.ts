// Logger utility

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LoggerConfig {
  level: LogLevel;
  prefix?: string;
  enableTimestamp?: boolean;
}

class Logger {
  private config: LoggerConfig;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableTimestamp: true,
      ...config,
    };
  }

  private format(level: string, message: string): string {
    let formatted = `[${level}]`;
    if (this.config.prefix) {
      formatted += ` [${this.config.prefix}]`;
    }
    if (this.config.enableTimestamp) {
      formatted += ` ${new Date().toISOString()}`;
    }
    formatted += ` ${message}`;
    return formatted;
  }

  debug(message: string, ...args: any[]): void {
    if (this.config.level <= LogLevel.DEBUG) {
      console.debug(this.format('DEBUG', message), ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.config.level <= LogLevel.INFO) {
      console.info(this.format('INFO', message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.config.level <= LogLevel.WARN) {
      console.warn(this.format('WARN', message), ...args);
    }
  }

  error(message: string, error?: Error, ...args: any[]): void {
    if (this.config.level <= LogLevel.ERROR) {
      console.error(this.format('ERROR', message), error, ...args);
    }
  }
}

export const createLogger = (prefix?: string): Logger => {
  return new Logger({ prefix });
};

export const logger = new Logger();
