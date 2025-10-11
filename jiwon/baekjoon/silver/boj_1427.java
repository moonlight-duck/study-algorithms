package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class boj_1427 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();

        String[] arrays = input.split("");
        int[] intArrays = new int[arrays.length];
        for (int i = 0; i < arrays.length; i++) {
            intArrays[i] = Integer.parseInt(arrays[i]);
        }

        Arrays.sort((intArrays));

        StringBuilder sb = new StringBuilder();
        for (int i = intArrays.length-1; i >= 0; i--) {
            sb.append(intArrays[i]);
        }

        System.out.println(sb);
    }
}
