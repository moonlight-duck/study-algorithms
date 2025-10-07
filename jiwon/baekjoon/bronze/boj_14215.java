package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_14215 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");

        int a =  Integer.parseInt(token.nextToken());
        int b =  Integer.parseInt(token.nextToken());
        int c =  Integer.parseInt(token.nextToken());

        int max =  Math.max(Math.max(a, b), c);
        int sum = a + b + c - max;

        if (max >= sum) {
            System.out.println(sum + (sum - 1));
        } else {
            System.out.println(a + b + c);
        }
    }
}
