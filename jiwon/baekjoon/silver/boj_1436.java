package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class boj_1436 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        List<Integer> list = new ArrayList<>();
        int num = 666;

        while (true) {
            // "666"이 포함되는지
            String toString = String.valueOf(num);
            if (toString.contains("666")) list.add(num);

            // n번째가 되면 멈추기
            if (list.size() == n) break;

            num += 1;
        }

        System.out.println(list.get(list.size() - 1));
    }
}
