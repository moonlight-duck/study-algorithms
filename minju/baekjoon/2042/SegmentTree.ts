class SegmentTree {
  private tree: bigint[]; // 트리의 노드 값을 저장할 배열(BigInt 사용)
  private n: number; // 원본 데이터 배열 크기
  private data: bigint[]; // 원본 배열의 현재 상태(업데이트 시 계산용)

  constructor(arr: bigint[]) {
    // 초기화할 원본 데이터 배열
    this.n = arr.length;
    this.data = arr;
    // 트리는 일반적으로 4N 크기로 초기화
    this.tree = new Array(this.n * 4).fill(0n);
    // 트리를 구성한다.
    this.build(0, 0, this.n - 1);
  }

  // 트리 생성 함수
  private build(node: number, start: number, end: number): void {
    if (start === end) {
      // 리프노드는 원본 데이터를 가진다.
      this.tree[node] = this.data[start];
      return;
    }

    const mid = Math.floor((start + end) / 2);

    this.build(2 * node + 1, start, mid);
    this.build(2 * node + 2, mid + 1, end);

    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  // 값 업데이트(Update)
  private updateRecursive(
    node: number,
    start: number,
    end: number,
    idx: number,
    newValue: bigint
  ): void {
    if (start === end) {
      this.data[idx] = newValue; // 원본 데이터 갱신
      this.tree[node] = newValue; // 트리노트 갱신
      return;
    }

    const mid = Math.floor((start + end) / 2);

    // 업데이트할 인덱스가 왼쪽 도는 오른쪽에 있는지 확인 후에 재귀 호출
    if (idx <= mid) {
      this.updateRecursive(2 * node + 1, start, mid, idx, newValue);
    } else {
      this.updateRecursive(2 * node + 2, mid + 1, end, idx, newValue);
    }

    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  // 공개 update
  public update(idx: number, newValue: bigint): void {
    this.updateRecursive(0, 0, this.n - 1, idx, newValue);
  }

  // 구간 합의 질의 (Query)
  private queryRecursive(
    node: number,
    start: number,
    end: number,
    l: number,
    r: number
  ): bigint {
    // Case 1(예외처리): 현재 노드의 구간이 요청 구간과 완전히 겹치지 않는 경우 (범위 밖)
    if (r < start || end < l) {
      return 0n; //
    }

    // Case 2: 현재 노드의 구간이 요청 구간에 완전히 포함되는 경우
    if (l <= start && end <= r) {
      return this.tree[node];
    }

    // Case 3: 부분적으로 겹치는 경우, 자식 노드로 재귀 호출
    const mid = Math.floor((start + end) / 2);
    const leftSum = this.queryRecursive(2 * node + 1, start, mid, l, r);
    const rightSum = this.queryRecursive(2 * node + 2, mid + 1, end, l, r);

    return leftSum + rightSum;
  }

  // 공개 query
  public query(l: number, r: number): bigint {
    return this.queryRecursive(0, 0, this.n - 1, l, r);
  }
}
export default SegmentTree;
