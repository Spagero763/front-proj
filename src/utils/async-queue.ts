// Async queue for managing concurrent operations
export class AsyncQueue {
  private queue: Array<() => Promise<any>> = [];
  private running = false;
  constructor(private concurrency = 1) {}
  add(fn: () => Promise<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }
  private async process(): Promise<void> {
    if (this.running || this.queue.length === 0) return;
    this.running = true;
    while (this.queue.length > 0) {
      await this.queue.shift()?.();
    }
    this.running = false;
  }
}
