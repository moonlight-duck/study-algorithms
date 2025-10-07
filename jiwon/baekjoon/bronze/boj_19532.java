package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_19532 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer tokenizer = new StringTokenizer(br.readLine(), " ");
        int a = Integer.parseInt(tokenizer.nextToken());
        int b = Integer.parseInt(tokenizer.nextToken());
        int c = Integer.parseInt(tokenizer.nextToken());
        int d = Integer.parseInt(tokenizer.nextToken());
        int e = Integer.parseInt(tokenizer.nextToken());
        int f = Integer.parseInt(tokenizer.nextToken());

        int x_result = 1000;
        int y_result = 1000;

        for (int x = -999; x <= 999; x++) {
            for (int y = -999; y <= 999; y++) {
                if (((a * x) + (b * y) == c) && (d * x) + (e * y) == f) {
                    x_result = x;
                    y_result = y;
                    break;
                }
            }
            if (x_result != 1000) {
                break;
            }
        }

        System.out.println(x_result + " " + y_result);
    }
}
