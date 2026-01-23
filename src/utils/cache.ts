// Caching utilities
export class Cache<K, V> {
  private map = new Map<K, {value: V; expiresAt?: number}>();
  constructor(private defaultTtl?: number) {}
  set(key: K, value: V, ttl = this.defaultTtl): void {
    this.map.set(key, {value, expiresAt: ttl ? Date.now() + ttl : undefined});
  }
  get(key: K): V | undefined {
    const entry = this.map.get(key);
    if (!entry) return undefined;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.map.delete(key);
      return undefined;
    }
    return entry.value;
  }
  has(key: K): boolean {
    return this.get(key) !== undefined;
  }
  delete(key: K): void {
    this.map.delete(key);
  }
  clear(): void {
    this.map.clear();
  }
}
