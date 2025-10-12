package baekjoon.silver;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Objects;

public class boj_1181 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        String[] array = new String[n];
        for (int i = 0; i < n; i++) {
            array[i] = br.readLine();
        }

        Arrays.sort(array, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if(o1.length() == o2.length()) { // 길이가 같을 경우
                    return o1.compareTo(o2); // 사전 순 정렬
                } else {
                    return o1.length() - o2.length();
                }
            }
        });

        StringBuilder sb = new StringBuilder();
        sb.append(array[0]).append("\n");
        for (int i = 1; i < n; i++) {
            if (Objects.equals(array[i-1], array[i])) continue; // 앞 문자와 중복이면 패스
            sb.append(array[i]).append("\n");
        }
        System.out.println(sb);
    }
}
