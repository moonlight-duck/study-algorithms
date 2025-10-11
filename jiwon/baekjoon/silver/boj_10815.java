package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class boj_10815 {
    public static  void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        HashMap<Integer, Integer> map = new HashMap<>();
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());

        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i ++) {
            int num = Integer.parseInt(token.nextToken());
            map.put(num, num);
        }

        int m =  Integer.parseInt(br.readLine());
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < m; i ++) {
            int find =  Integer.parseInt(token.nextToken());

            if (map.containsKey(find)) {
                sb.append(1).append(" ");
            } else {
                sb.append(0).append(" ");
            }
        }

        System.out.println(sb);
    }
}
