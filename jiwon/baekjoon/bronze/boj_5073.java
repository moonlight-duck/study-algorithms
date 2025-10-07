package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_5073 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        while (true) {
            token = new StringTokenizer(br.readLine(), " ");
            int a = Integer.parseInt(token.nextToken());
            int b = Integer.parseInt(token.nextToken());
            int c = Integer.parseInt(token.nextToken());

            if (a == 0 && b == 0 && c == 0) {
                break;
            }

            int max = Math.max(Math.max(a, b), c);
            int sum = a + b + c - max;

            if (max >= sum) System.out.println("Invalid");
            else if (a == b && b == c) System.out.println("Equilateral");
            else if (a != b && b != c && c != a) System.out.println("Scalene");
            else System.out.println("Isosceles");
        }
    }
}
