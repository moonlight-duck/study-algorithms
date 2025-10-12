package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class boj_7785 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        Map<String, String> map = new TreeMap<>(Collections.reverseOrder());

        StringTokenizer token;
        for (int i = 0; i < n; i++) {
            token = new StringTokenizer(br.readLine(), " ");
            String name = token.nextToken();
            String log = token.nextToken();

            if (Objects.equals(log, "enter")) {
                map.put(name, name);
            } else {
                map.remove(name);
            }
        }

        StringBuilder sb = new StringBuilder();
        map.forEach((k,v) -> sb.append(k).append("\n"));

        System.out.println(sb);
    }
}
