package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_10870 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n == 0) {
            System.out.println("0");
        } else if (n == 1) {
            System.out.println("1");
        } else {
            int[] array = new int[n+1];
            array[0] = 0;
            array[1] = 1;

            for (int i = 2; i <= n; i++) {
                array[i] = array[i - 2] + array[i - 1];
            }

            System.out.println(array[array.length - 1]);
        }
    }
}
