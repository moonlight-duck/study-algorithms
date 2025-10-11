package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_2839 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        // 최소로 하기 위해선 최대한 5kg 봉지로 구성해야 한다
        // 18kg을 만들 수 있는 5kg 봉지 최대는 3개

        int count = 5000;

        for (int i = n/5; i >= 0; i--) { // 5kg 봉지 개수
            for (int j = n/3; j >= 0; j--) { // 3kg 봉지 개수
                int sum = i * 5 + j * 3;
                if (sum == n) {
                    count = Math.min(count, i + j);
                }
            }
        }

        System.out.println(count == 5000 ? -1 : count);
    }
}
