package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

public class boj_10814 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        String[][] arrays = new  String[n][2];
        StringTokenizer token;
        for (int i = 0; i < n; i++) {
            token =  new StringTokenizer(br.readLine(), " ");
            arrays[i][0] = token.nextToken(); // 나이
            arrays[i][1] = token.nextToken(); // 이름
        }

        Arrays.sort(arrays, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                int age1 = Integer.parseInt(o1[0]);
                int age2 = Integer.parseInt(o2[0]);

                return age1 - age2;
            }
        });

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(arrays[i][0]).append(" ").append(arrays[i][1]).append("\n");
        }
        System.out.println(sb);
    }
}
