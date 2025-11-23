package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_4779 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input;

        while ((input = br.readLine()) != null) {
            if (input.trim().isEmpty()) {
                break;
            }

            int n = Integer.parseInt(input);

            if (n == 0) {
                System.out.println("-");
            } else {
                StringBuilder result = new StringBuilder();
                int total = (int) Math.pow(3, n);

                result.append(cantor(total/3, false));
                result.append(" ".repeat(total/3));
                result.append(cantor(total/3, false));

                System.out.println(result);
            }
        }
    }

    private static String cantor(int length, boolean isBlank) {
        if (length == 1) {
            if (isBlank) {
                return " ";
            } else {
                return "-";
            }
        } else {
            StringBuilder result = new StringBuilder();

            result.append(cantor(length/3, false));
            result.append(" ".repeat(length/3));
            result.append(cantor(length/3, false));

            return result.toString();
        }
    }
}
