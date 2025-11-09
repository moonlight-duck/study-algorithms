package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;

public class boj_2164 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        Deque<Integer> queue = new LinkedList<>();
        for (int i = 1; i <= n; i++) {
            queue.addLast(i);
        }

        while (queue.size() > 1) {
            queue.removeFirst();

            // 하나만 남았을 때 대비
            if (queue.size() == 1) break;

            queue.addLast(queue.removeFirst());
        }

        System.out.println(queue.peekFirst());
    }
}
