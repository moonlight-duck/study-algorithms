package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class boj_11866 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int k = Integer.parseInt(token.nextToken());

        StringBuilder sb = new StringBuilder();
        Deque<Integer> queue = new LinkedList<>();

        for (int i = 1; i <= n; i++) {
            queue.addLast(i);
        }

        while (!queue.isEmpty()) {
            // (k-1)번까지 뒤로 보냄
            for (int i = 0; i < k-1; i++) {
                queue.addLast(queue.removeFirst());
            }
            
            // 당사자는 빼버림
            sb.append(queue.removeFirst());

            // 쉼표랑 공백
            if (!queue.isEmpty()) {
                sb.append(", ");
            }
        }

        System.out.println("<" + sb.toString() + ">");
    }
}
