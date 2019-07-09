/**
 * 堆栈 --- 后进先出
 */
class Stack<T> {
    public reverse: boolean = false;
    public stack: T[] = [];

    public constructor(...items) {
        this.stack = [...items];
    }

    public push(...items: T[]): number {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
    }

    public pop(): T {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}

export default Stack;
