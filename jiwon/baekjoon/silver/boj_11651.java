package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class boj_11651 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer token;
        int[][] arrays =  new int[n][2];

        for (int i = 0; i < n; i++) {
            token = new StringTokenizer(br.readLine(), " ");
            int x = Integer.parseInt(token.nextToken());
            int y = Integer.parseInt(token.nextToken());

            arrays[i][0] = x;
            arrays[i][1] = y;
        }

        Arrays.sort(arrays, (arrays1, arrays2) -> {
            if (arrays1[1] == arrays2[1]) { // y가 같다면
                return arrays1[0] - arrays2[0]; // x로 비교
            } else {
                return arrays1[1] - arrays2[1];
            }
        });

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(arrays[i][0]).append(" ").append(arrays[i][1]).append("\n");
        }
        System.out.println(sb);
    }
}
