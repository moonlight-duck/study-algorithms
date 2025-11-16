package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_10872 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if (n == 0) {
            System.out.println("1");
        } else {
            int result = 1;
            while (n > 0) {
                result *= n;
                n -= 1;
            }
            System.out.println(result);
        }
    }
}
