/**
 * 队列 --- 先进先出
 */
class Queue<T> {
    private reverse: boolean = false;
    private queue: T[] = [];

    public constructor(...items) {
        this.queue = [...items];
    }

    public enqueue(...items: T[]): number {
        return this.reverse ? this.queue.push(...items) : this.queue.unshift(...items);
    }

    public dequeue(): T {
        return this.reverse ? this.queue.shift() : this.queue.pop();
    }
}

export default Queue;
