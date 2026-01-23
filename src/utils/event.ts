// Event handling utilities

export type EventListener<T = any> = (event: T) => void;
export type EventUnsubscribe = () => void;

export class EventEmitter<T extends Record<string, any> = Record<string, any>> {
  private listeners: Map<keyof T, Set<EventListener<any>>> = new Map();

  on<K extends keyof T>(event: K, listener: EventListener<T[K]>): EventUnsubscribe {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);

    return () => {
      this.listeners.get(event)?.delete(listener);
    };
  }

  once<K extends keyof T>(event: K, listener: EventListener<T[K]>): EventUnsubscribe {
    const wrappedListener = (eventData: T[K]) => {
      listener(eventData);
      unsubscribe();
    };

    const unsubscribe = this.on(event, wrappedListener);
    return unsubscribe;
  }

  off<K extends keyof T>(event: K, listener: EventListener<T[K]>): void {
    this.listeners.get(event)?.delete(listener);
  }

  emit<K extends keyof T>(event: K, eventData: T[K]): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      for (const listener of listeners) {
        listener(eventData);
      }
    }
  }

  removeAllListeners<K extends keyof T>(event?: K): void {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
  }

  listenerCount<K extends keyof T>(event: K): number {
    return this.listeners.get(event)?.size ?? 0;
  }
}
