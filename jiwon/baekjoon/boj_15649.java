package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_15649 {
    public static StringBuilder sb = new StringBuilder();

    public static int[] arr;
    public static boolean[] visit;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        arr = new int[m];
        visit = new boolean[n];
        dfs(n, m, 0);
        System.out.print(sb);
    }

    public static void dfs(int N, int M, int depth) {
        if (depth == M) { // 끝까지 갔다면
            for (int val : arr) {
                sb.append(val).append(' ');
            }
            sb.append('\n');
            return;
        }

        for (int i = 0; i < N; i++) {
            if (!visit[i]) { // 방문하지 않았다면
                visit[i] = true;

                arr[depth] = i + 1;
                dfs(N, M, depth + 1);

                visit[i] = false; // 다시 나왔으니
            }
        }
    }
}
