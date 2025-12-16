package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class boj_10773 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int k = Integer.parseInt(br.readLine());

        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int input = Integer.parseInt(br.readLine());

            if (input == 0) {
                if (!list.isEmpty()) list.remove(list.size()-1); // 값이 있을 때 삭제
            } else {
                list.add(input);
            }
        }

        System.out.println(list.stream().mapToInt(Integer::intValue).sum());
    }
}
