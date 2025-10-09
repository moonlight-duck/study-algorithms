package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class boj_10815 {
    public static  void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        List<Integer> list = new ArrayList<>();
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i ++) {
            list.add(Integer.parseInt(token.nextToken()));
        }

        int m =  Integer.parseInt(br.readLine());
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < m; i ++) {
            int find =  Integer.parseInt(token.nextToken());

            if (list.contains(find)) {
                sb.append(1).append(" ");
            } else {
                sb.append(0).append(" ");
            }
        }

        System.out.println(sb);
    }
}
