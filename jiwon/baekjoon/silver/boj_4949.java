package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class boj_4949 {
    public static void main(String[] args) throws IOException {
        List<String> startChar = List.of("[", "(");

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        while (true){
            String[] input = br.readLine().split("");

            if (input.length == 1 && Objects.equals(input[0], ".")) {
                break;
            }

            List<String> list = new ArrayList<>();

            for (String s : input) {
                if (startChar.contains(s)) {
                    list.add(s);
                } else if (s.equals("]")) {
                    if (!list.isEmpty() && list.get(list.size() - 1).equals("[")) {
                        list.remove(list.size() - 1);
                    } else {
                        list.add(s);
                    }
                } else if (s.equals(")")) {
                    if (!list.isEmpty() && list.get(list.size() - 1).equals("(")) {
                        list.remove(list.size() - 1);
                    } else {
                        list.add(s);
                    }
                }
            }

            if (list.isEmpty()) {
                sb.append("yes").append("\n");
            } else {
                sb.append("no").append("\n");
            }
        }

        System.out.println(sb);
    }
}
