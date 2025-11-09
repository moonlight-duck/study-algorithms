package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class boj_28278 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        List<Integer> list = new ArrayList<>();

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < n; i++) {
            String[] command = br.readLine().split(" ");

            switch (command[0]) {
                case "1" -> list.add(Integer.parseInt(command[1]));
                case "2" -> {
                    if (list.isEmpty()) {
                        sb.append("-1").append("\n");
                    } else {
                        sb.append(list.get(list.size()-1)).append("\n");
                        list.remove(list.size()-1);
                    }
                }
                case "3" -> sb.append(list.size()).append("\n");
                case "4" -> {
                    if (list.isEmpty()) {
                        sb.append("1").append("\n");
                    } else {
                        sb.append("0").append("\n");
                    }
                }
                case "5" -> {
                    if (list.isEmpty()) {
                        sb.append("-1").append("\n");
                    } else {
                        sb.append(list.get(list.size()-1)).append("\n");
                    }
                }
            }
        }

        System.out.println(sb);
    }
}
