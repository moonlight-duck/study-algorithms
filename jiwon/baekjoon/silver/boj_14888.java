package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_14888 {
    public static int min = Integer.MAX_VALUE;
    public static int max = Integer.MIN_VALUE;
    public static int n;
    public static int[] nums;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine()); // 수의 개수

        nums = new int[n];
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }

        int[] operator = new int[4];
        st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < 4; i++) {
            operator[i] = Integer.parseInt(st.nextToken());
        }

        dfs(operator[0], operator[1], operator[2], operator[3], nums[0], 1);

        System.out.println(max);
        System.out.println(min);
    }

    private static void dfs(int plus, int minus, int multiple, int division, int sum, int index) {
        if (index == n) {
            if (sum < min) {
                min = sum;
            }
            if (sum > max) {
                max = sum;
            }
        }

        if (plus > 0) {
            dfs(plus-1, minus, multiple, division, sum + nums[index], index + 1);
        }
        if (minus > 0) {
            dfs(plus, minus-1, multiple, division, sum - nums[index], index + 1);
        }
        if (multiple > 0) {
            dfs(plus, minus, multiple-1, division, sum * nums[index], index + 1);
        }
        if (division > 0) {
            dfs(plus, minus, multiple, division-1, sum / nums[index], index + 1);
        }
    }
}
