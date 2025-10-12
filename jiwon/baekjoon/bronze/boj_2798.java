package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class boj_2798 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        List<Integer> nums = new ArrayList<Integer>();

        // m을 넘지 않으면서 m에 최대한 가까운 3장
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(token.nextToken());
            nums.add(num);
        }

        // 작은 수부터 정렬
        Collections.sort(nums);

        int result = 0;

        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    int sum =  nums.get(i) + nums.get(j) + nums.get(k);
                    if (sum > m) {
                        break;
                    }
                    result = Math.max(result, sum);
                }
            }
        }

        System.out.println(result);
    }
}
