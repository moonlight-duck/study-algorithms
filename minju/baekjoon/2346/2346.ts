import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

class Node<T> {
  public index: number;
  public value: T;
  public prev: Node<T> | null;
  public next: Node<T> | null;

  constructor(
    index: number,
    value: T,
    prev: Node<T> | null = null,
    next: Node<T> | null = null,
  ) {
    this.index = index;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class ArrayToNodeList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  private size: number = 0;

  constructor(data: Array<T>) {
    this.head = new Node(1, data[0]);
    this.tail = this.head;
    let current = this.head;
    this.size = 1;

    for (let i = 1; i < data.length; i++) {
      const newNode = new Node(i + 1, data[i], current);

      current.next = newNode;

      current = newNode;
      this.tail = newNode;
      this.size++;
    }
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  deleteNode(node: Node<T>) {
    if (this.head !== node) {
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      this.size--;
    } else {
      console.error("헤드가 가르키는 Node는 제거할 수 없습니다. ");
    }
  }

  getIndexMove(move: number) {
    const deleteItem = this.head;
    if (move > 0) {
      for (let i = 0; i < move; i++) {
        this.head = this.head?.next ?? null;
      }
    } else {
      for (let i = move; i < 0; i++) {
        this.head = this.head?.prev ?? null;
      }
    }
    if (deleteItem != null) this.deleteNode(deleteItem);
    // this.print();
    return this.head?.index ?? -1;
  }

  // print() {
  //   console.log("------- print ---------");
  //   let current = this.head;
  //   for (let i = 0; i < this.size; i++) {
  //     if (current !== null) {
  //       console.log(current.index, current.value);
  //       current = current.next;
  //     }
  //   }
  //   console.log("-----------------");
  // }
}

const NodeList = new ArrayToNodeList(input[1].split(" ").map(Number));
const result = [];
result.push(1);
for (let i = 0; i < Number(input[0]) - 1; i++) {
  if (NodeList.head) {
    result.push(NodeList.getIndexMove(NodeList.head.value));
  }
}

console.log(result.join(" "));
