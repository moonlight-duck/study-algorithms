package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class boj_1620 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken()); // 포켓몬 개수
        int m = Integer.parseInt(token.nextToken()); // 문제 개수

        HashMap<String, String> nameMap = new HashMap<>();
        HashMap<String, String> numMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            String name = br.readLine();
            nameMap.put(name, String.valueOf(i+1));
            numMap.put(String.valueOf(i+1), name);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < m; i++) {
            String find = br.readLine();
            if (nameMap.containsKey(find)) {
                sb.append(nameMap.get(find)).append("\n");
            } else {
                sb.append(numMap.get(find)).append("\n");
            }
        }

        System.out.print(sb);
    }
}
