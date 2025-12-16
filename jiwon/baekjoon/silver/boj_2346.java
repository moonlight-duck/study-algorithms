package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class boj_2346 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        Deque<Integer> index = new ArrayDeque<>();
        Deque<Integer> deque = new ArrayDeque<>();

        StringBuilder sb = new StringBuilder();
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            index.addLast(i + 1);
            deque.addLast(Integer.parseInt(token.nextToken()));
        }

        while (!index.isEmpty()) {
            int turn = deque.getFirst();
            sb.append(index.getFirst()).append(" ");

            index.removeFirst();
            deque.removeFirst();

            if (index.isEmpty()) {
                break;
            }

            if (turn > 0) {
                for (int i = 0; i < (turn-1); i++) {
                    index.addLast(index.removeFirst());
                    deque.addLast(deque.removeFirst());
                }
            } else {
                for (int i = 0; i < (-turn); i++) {
                    index.addFirst(index.removeLast());
                    deque.addFirst(deque.removeLast());
                }
            }
        }

        System.out.println(sb);
    }
}
