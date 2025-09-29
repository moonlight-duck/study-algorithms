/**
 * 카테고리 : 연결리스트
 * 문제 : https://www.acmicpc.net/problem/23309
 */

import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

type commandType = "BN" | "BP" | "CN" | "CP";

class ListNode {
  data: string;
  prev: ListNode | null;
  next: ListNode | null;

  constructor(
    data: string,
    prev: ListNode | null = null,
    next: ListNode | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  private head: ListNode | null = null;
  private current: ListNode | null = null;

  constructor(data: Array<string>) {
    this.head = new ListNode(data[0]);
    this.current = this.head;
    for (let i = 1; i < data.length; i++) {
      const newNode: ListNode = new ListNode(data[i], this.current);

      if (this.current) this.current.next = newNode;
      this.current = newNode;
    }

    if (this.current) this.current.next = this.head;
    this.head.prev = this.current;
  }

  findNode(data: string): ListNode | undefined {
    if (!this.head) return undefined;

    let target = this.head;
    do {
      if (target.data === data) return target;
      target = target.next!;
    } while (target !== this.head);

    return undefined;
  }

  command(
    commad: commandType,
    i: string | null = null,
    j: string | null = null
  ) {
    const target = i ? this.findNode(i) : undefined;
    switch (commad) {
      case "BN": // 고유 번호 i를 가진 역의 다음 역의 고유번호 출력, 그 사이에 고유번호 j 설립
        {
          if (j) {
            if (target?.next?.data) {
              console.log(target.next.data);
              const newNode = new ListNode(j, target, target.next);
              target.next.prev = newNode;
              target.next = newNode;
            } else {
              console.error("요소를 찾을수 없습니다.");
            }
          } else {
            console.error("요청이 잘못되었습니다.");
          }
        }
        break;
      case "BP": // 고유 번호 i를 가진 역의 이전 역의 고유번호 출력, 그 사이에 고유번호 j 설립
        {
          if (j) {
            if (target?.prev?.data) {
              console.log(target.prev.data);
              const newNode = new ListNode(j, target.prev, target);
              target.prev.next = newNode;
              target.prev = newNode;
            } else {
              console.error("요소를 찾을수 없습니다.");
            }
          } else {
            console.error("요청이 잘못되었습니다.");
          }
        }
        break;
      case "CN": // 고유 번호 i를 가진 역의 다음 역의 고유번호 출력, i의 다음역 폐쇄
        if (target?.next?.data) {
          console.log(target.next.data);
          if (target?.next?.next) {
            target.next.next.prev = target;
            target.next = target.next.next;
          }
        }
        break;
      case "CP": // 고유 번호 i를 가진 역의 이전 역의 고유번호 출력, i의 다음역 폐쇄
        {
          if (target?.prev?.data) {
            console.log(target.prev.data);
            if (target?.prev?.prev) {
              target.prev.prev.next = target;
              target.prev = target.prev.prev;
            }
          }
        }
        break;
    }
  }
}

/**
 * N = 역의 개수
 * M = 공사 횟수
 */
const [, M] = input[0].split(" ").map(Number);
const nodeList = new LinkedList(input[1].split(" "));
const commandList = input.slice(2);

// 명령어 처리
for (let k = 0; k < M; k++) {
  const [command, i, j] = commandList[k].split(" ");
  nodeList.command(command as commandType, i, j);
}
