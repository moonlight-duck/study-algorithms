package baekjoon.silver;

import java.io.*;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class boj_24511 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] a = new int[n];
        StringTokenizer token = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            a[i] = Integer.parseInt(token.nextToken());
        }

        int[] b = new int[n];
        token = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            b[i] = Integer.parseInt(token.nextToken());
        }

        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (a[i] == 0) {
                deque.addLast(b[i]);
            }
        }

        int m = Integer.parseInt(br.readLine());
        token = new StringTokenizer(br.readLine());

        StringBuilder sb = new StringBuilder();
        while (m > 0) {
            m -= 1;

            int x = Integer.parseInt(token.nextToken());
            deque.addFirst(x);
            sb.append(deque.removeLast()).append(" ");
        }

        System.out.println(sb);
    }
}
