package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class boj_11478 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();

        String[] array = input.split("");
        Set<String> set = new HashSet<>();

        for (int i = 0; i <= array.length; i++) {
            for (int j = i; j <= array.length; j++) {
                set.add(input.substring(i, j));
            }
        }

        System.out.println(set.size() - 1); // 공백은 제외
    }
}
