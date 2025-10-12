package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;
import java.util.TreeMap;

public class boj_1764 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        HashMap<String, String> map = new HashMap<>();
        TreeMap<String, String> result = new TreeMap<>();

        for (int i = 0; i < n; i++) {
            String word = br.readLine();
            map.put(word, word);
        }

        for (int i = 0; i < m; i++) {
            String find =  br.readLine();
            if (map.containsKey(find)) {
                result.put(find, find);
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.append(result.size()).append("\n");

        result.forEach((k, v) -> sb.append(k).append("\n"));

        System.out.print(sb);
    }
}
