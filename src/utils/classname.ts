// ClassNameBuilder utility for conditional CSS classes

export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes
    .filter((c): c is string => typeof c === 'string' && c.length > 0)
    .join(' ');
};

export class ClassNameBuilder {
  private classes: Set<string> = new Set();

  add(...items: (string | undefined | null | boolean)[]): this {
    for (const item of items) {
      if (typeof item === 'string' && item.length > 0) {
        this.classes.add(item);
      }
    }
    return this;
  }

  addConditional(condition: boolean, className: string): this {
    if (condition) {
      this.classes.add(className);
    }
    return this;
  }

  remove(...items: string[]): this {
    for (const item of items) {
      this.classes.delete(item);
    }
    return this;
  }

  has(className: string): boolean {
    return this.classes.has(className);
  }

  clear(): this {
    this.classes.clear();
    return this;
  }

  toString(): string {
    return Array.from(this.classes).join(' ');
  }

  toArray(): string[] {
    return Array.from(this.classes);
  }
}
