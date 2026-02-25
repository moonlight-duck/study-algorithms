package baekjoon.gold;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_11729 {
    static StringBuilder answer = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        hanoi(n, 1, 2, 3);

        System.out.println((int)Math.pow(2, n) - 1);
        System.out.print(answer);
    }

    public static void hanoi(int n, int start, int mid, int end) {
        if (n == 1) {
            answer.append(start).append(" ").append(end).append("\n");
            return;
        }

        hanoi(n - 1, start, end, mid);
        answer.append(start).append(" ").append(end).append("\n");
        hanoi(n - 1, mid, start, end);
    }
}
