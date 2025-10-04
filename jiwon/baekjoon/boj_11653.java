package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class boj_11653 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        if (num > 1) {
            List<Integer> primes = new ArrayList<>();
            primes.add(2);

            // 소수 구하기
            for (int i = 3; i <= num; i+=2) {
                boolean isPrime = true;
                for (Integer prime : primes) {
                    if (i % prime == 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime) {
                    primes.add(i);
                }
            }

            // 소인수분해 하기
            for (Integer prime : primes) {
                while (num != 0) {
                    if (num % prime == 0) {
                        num /= prime;
                        System.out.println(prime);
                    } else {
                        break;
                    }
                }
            }
        }
    }
}
