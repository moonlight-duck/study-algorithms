package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_2839 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int count = 0;

        while (n >= 5) {
            n -= 5;
            count += 1;
        }

        while (n >= 3) {
            n -= 3;
            count += 1;
        }

        if (n == 0) {
            System.out.println(count);
        } else {
            System.out.println(-1);
        }
    }
}
