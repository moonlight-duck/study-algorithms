package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_3009 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        token = new StringTokenizer(br.readLine(), " ");
        int a1 = Integer.parseInt(token.nextToken());
        int a2 = Integer.parseInt(token.nextToken());

        token = new StringTokenizer(br.readLine(), " ");
        int b1 = Integer.parseInt(token.nextToken());
        int b2 = Integer.parseInt(token.nextToken());

        token = new StringTokenizer(br.readLine(), " ");
        int c1 = Integer.parseInt(token.nextToken());
        int c2 = Integer.parseInt(token.nextToken());

        int d1 = 0, d2 = 0;

        if (a1 != b1 && a1 != c1) d1 = a1;
        else if (a1 == c1) d1 = b1;
        else d1 = c1;

        if (a2 != b2 && a2 != c2) d2 = a2;
        else if (a2 == c2) d2 = b2;
        else d2 = c2;

        System.out.println(d1 + " " + d2);
    }
}
