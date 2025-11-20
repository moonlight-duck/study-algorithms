package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_1037 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n == 1) {
            int only = Integer.parseInt(br.readLine());
            System.out.println((int) Math.pow(only, 2));
        } else {
            int min = Integer.MAX_VALUE;
            int max = -Integer.MAX_VALUE;

            StringTokenizer token = new StringTokenizer(br.readLine(), " ");

            for (int i = 0; i < n; i++) {
                int num = Integer.parseInt(token.nextToken());

                if (num < min) min = num;
                if (num > max) max = num;
            }

            System.out.println(min * max);
        }
    }
}
