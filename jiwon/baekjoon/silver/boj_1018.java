package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class boj_1018 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        int count = 2500;

        // 입력값 배열에 넣기
        String[][] arrays = new String[n][m];
        for (int i = 0; i < n; i++) {
            String line = br.readLine();
            arrays[i] = line.split("");
        }

        // 체스판을 조정하면서 개수 구하기
        for (int i = 0; i <= (m-8); i++) {
            for (int j = 0; j <= (n-8); j++) {
                int case1ChangeCount = getChangeCount("W", i, j, arrays);
                int case2ChangeCount = getChangeCount("B", i, j, arrays);

                int min = Math.min(case1ChangeCount, case2ChangeCount);
                count = Math.min(count, min);
            }
        }

        System.out.println(count);
    }

    // 주어진 좌표에서 수정해야 할 칸 수 구하기
    private static int getChangeCount(String color, int n, int m, String[][] arrays) {
        int changeCount = 0;
        for (int i = m; i < (m+8); i++) {
            for (int j = n; j < (n+8); j++) {
                if (!Objects.equals(arrays[i][j], color)) {
                    changeCount += 1;
                }
                color = changeColor(color);
            }
            // 다음 줄로 넘어갈 때
            color = changeColor(color);
        }
        return changeCount;
    }

    // 색 바꾸기
    private static String changeColor(String color) {
        if (Objects.equals(color, "W")) return "B";
        else return "W";
    }
}
