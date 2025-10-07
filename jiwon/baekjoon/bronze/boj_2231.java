package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class boj_2231 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n =  Integer.parseInt(br.readLine());
        int result = 0;

        for (int i = 1; i <= n; i++) {
            if (getSum(i) == n) {
                result = i;
                break;
            }
        }

        System.out.println(result);
    }

    // 198 = 198 + 1 + 9 + 8
    private static int getSum(int num) {
        int sum = num;
        int temp = num;

        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }

        return sum;
    }
}
