/**
 * 单向链表 --- 插入和删除速度快。
 * */
class LNode<T> {
    public data: T;
    public next: LNode<T>;

    public constructor(item: T) {
        this.data = item;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: LNode<T>;
    private tail: LNode<T>;
    public length: number;

    public constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public push(data: T): void {
        const node: LNode<T> = new LNode(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    public pop(): LNode<T> {
        debugger;
        if (this.isEmpty()) {
            return;
        }
        if (this.head === this.tail) {
            const head: LNode<T> = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return head;
        }

        let node: LNode<T> = this.tail;
        let currentNode: LNode<T> = this.head;
        let penultimate: LNode<T>;

        while (currentNode) {
            if (currentNode.next === this.tail) {
                penultimate = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        penultimate.next = null;
        this.tail = penultimate;
        this.length--;
        return node;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public get(index: number): LNode<T> {
        if (index === 0) {
            return this.head;
        }

        if (index < 0 || index > this.length) {
            return null;
        }

        let currentNode: LNode<T> = this.head;
        let i = 0;
        while (i < index) {
            i++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    public delete(index): LNode<T> {
        let currentNode: LNode<T> = this.head;

        if (index === 0) {
            let deleteNode: LNode<T>;
            currentNode.next = this.head;
            deleteNode = currentNode;
            this.length--;
            return deleteNode;
        }

        if (index < 0 || index > this.length) {
            return null;
        }

        let i = 0;
        let previous: LNode<T>;

        while (i < index) {
            i++;
            previous = currentNode;
            currentNode = currentNode.next;
        }

        previous.next = currentNode.next;
        this.length--;
        return currentNode;
    }

    public print(): string {
        const list = [];
        let currentNode: LNode<T> = this.head;
        while (currentNode) {
            list.push(currentNode);
            currentNode = currentNode.next;
        }
        return list.join('=>');
    }
}

export default LinkedList;
