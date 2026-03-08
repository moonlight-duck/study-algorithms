package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_1912 {
    public static int max = Integer.MIN_VALUE;
    public static int[] nums;
    public static int n;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }

        for (int i = 0; i < n; i++) {
            dp(i);
        }

        System.out.println(max);
    }

    private static void dp(int start) {
        int sum = 0;

        for (int i = start; i < n; i++) {
            sum += nums[i];

            if (sum >= max) {
                max = sum;
            }
        }
    }
}
