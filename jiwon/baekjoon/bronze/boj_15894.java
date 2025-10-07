package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class boj_15894 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num =  Integer.parseInt(br.readLine());

        // 1 : 4
        // 2 : 8
        // 3 : 12
        // 4 : 16

        BigInteger result = BigInteger.valueOf(num);
        BigInteger rule = BigInteger.valueOf(4);

        System.out.println(result.multiply(rule));
    }
}
