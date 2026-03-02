package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_15649 {
    public static StringBuilder sb = new StringBuilder();

    public static int[] result;
    public static boolean[] visit;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        result = new int[m];
        visit = new boolean[n];

        dfs(n, m, 0);
        System.out.print(sb);
    }

    private static void dfs(int n, int m, int depth) {
        // 끝까지 도달했다면
        if (depth == m) {
            for (int num : result) {
                sb.append(num).append(" ");
            }
            sb.append('\n');
            return;
        }

        for (int i = 0; i < n; i++) {
            // 아직 방문하지 않았다면
            if (!visit[i]) {
                visit[i] = true;

                result[depth] = i+1;
                dfs(n, m, depth + 1);

                visit[i] = false;
            }
        }
    }
}