package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_9063 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int count = Integer.parseInt(br.readLine());
        int x_min = 10000, x_max = -10000, y_min = 10000, y_max = -10000;

        StringTokenizer token;
        for (int i = 0; i < count; i++) {
            token = new StringTokenizer(br.readLine(), " ");
            int a = Integer.parseInt(token.nextToken());
            int b = Integer.parseInt(token.nextToken());

            x_min = Math.min(x_min, a);
            x_max = Math.max(x_max, a);

            y_min = Math.min(y_min, b);
            y_max = Math.max(y_max, b);
        }

        System.out.println((x_max - x_min) * (y_max - y_min));
    }
}
