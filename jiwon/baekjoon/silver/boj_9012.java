package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class boj_9012 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            String[] input = br.readLine().split("");

            List<String> list = new ArrayList<>();
            for (String s : input) {
                if (s.equals("(")) {
                    list.add(s);
                } else {
                    if (!list.isEmpty() && list.get(list.size() - 1).equals("(")) {
                        list.remove(list.size() - 1);
                    } else {
                        list.add(s);
                    }
                }
            }

            if (list.isEmpty()) {
                sb.append("YES").append("\n");
            } else {
                sb.append("NO").append("\n");
            }
        }

        System.out.println(sb);
    }
}
