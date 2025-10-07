package baekjoon;

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

        String[][] arrays = new String[n][m];

        for (int i = 0; i < n; i++) {
            String line = br.readLine();
            arrays[i] = line.split("");
        }

        int case1ChangeCount = getChangeCount("W", n, m, arrays);
        int case2ChangeCount = getChangeCount("B", n, m, arrays);

        System.out.println(Math.min(case1ChangeCount, case2ChangeCount));

    }

    private static int getChangeCount(String color, int n, int m, String[][] arrays) {
        int changeCount = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (!Objects.equals(arrays[i][j], color)) {
                    changeCount += 1;
                }
                color = changeColor(color);
            }
            if (m % 2 == 0) {
                color = changeColor(color);
            }
        }
        return changeCount;
    }

    private static String changeColor(String color) {
        if (Objects.equals(color, "W")) return "B";
        else return "W";
    }
}
