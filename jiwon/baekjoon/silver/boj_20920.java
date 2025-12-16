package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class boj_20920 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");

        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            String word = br.readLine();

            if (word.length() < m) {
                continue;
            }

            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        List<String> result = new ArrayList<>(map.keySet());
        result.sort((a, b) -> {
            // 자주 나올수록
            int countCompare = map.get(b) - map.get(a);
            if (countCompare != 0) {
                return countCompare;
            }

            // 길수록
            int lengthCompare = b.length() - a.length();
            if (lengthCompare != 0) {
                return lengthCompare;
            }

            // 사전순일수록
            return a.compareTo(b);
        });

        StringBuilder sb = new StringBuilder();
        for (String word : result) {
            sb.append(word).append("\n");
        }

        System.out.println(sb);
    }
}
