class VNode<T> {
    public data: T;
    public next: VNode<T>;
    public prev: VNode<T>;

    public constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList<T> {
    public head: VNode<T>;
    public tail: VNode<T>;
    public constructor() {
        this.head = null;
        this.tail = null;
    }

    public append(data): void {
        let node: VNode<T> = new VNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    public appendAt(pos: number, data: VNode<T>): void {
        let current = this.head;
        let counter = 1;
        let node: VNode<T> = new VNode(data);
        if (pos === 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            while (current) {
                current = current.next;
                if (counter === pos) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
    }

    public remove(item): void {
        let current = this.head;
        while (current) {
            if (current.data === item) {
            }
        }
    }

    public removeAt(): void {}
}
