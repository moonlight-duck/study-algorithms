package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class boj_2108 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        List<Integer> list = new ArrayList<>(); // 중앙, 범위
        int[] count = new int[8001]; // 최빈
        int sum = 0; // 평균
        int maxCount = 0; // 최빈

        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(br.readLine());
            list.add(num);
            count[num+4000] += 1;
            sum += num;

            // 최대 등장 횟수
            if (maxCount < count[num+4000]) {
                maxCount = count[num+4000];
            }
        }
        list.sort(Comparator.naturalOrder());
        /*
          num = -4000 -> count[0]
          num = -1 -> count[3999]
          num = 0 -> count[4000]
          num = 1 -> [4001]
          num = 4000 -> count[8000]
         */

        List<Integer> nums = new ArrayList<>();
        for (int i = 0; i < 8001; i++) {
            if (maxCount == count[i]) {
                nums.add(i-4000);
            }
        }
        nums.sort(Comparator.naturalOrder());

        StringBuilder sb = new StringBuilder();
        sb.append(Math.round((double)sum / n))
          .append("\n")
          .append(list.get(n/2))
          .append("\n")
          .append(nums.size() > 1 ? nums.get(1) : nums.get(0))
          .append("\n")
          .append(list.get(n-1) - list.get(0));

        System.out.println(sb);
    }
}
