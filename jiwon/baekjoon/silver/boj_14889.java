package baekjoon.silver;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_14889 {
    public static int n;
    public static int[][] board;
    public static boolean[] visited;
    public static int min = Integer.MAX_VALUE;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        visited = new boolean[n];
        board = new int[n][n];
        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < n; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        dfs(0, 0);

        System.out.println(min);
    }

    private static void dfs(int idx, int depth) {
        if (depth == n / 2) {
            calculate();
            return;
        }

        for (int i = idx; i < n; i++) {
            visited[i] = true;
            dfs(i + 1, depth + 1);
            visited[i] = false;
        }
    }

    private static void calculate() {
        int start = 0;  // true
        int link = 0;   // false

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {

                if (visited[i] && visited[j]) {
                    start += board[i][j] + board[j][i];
                }

                else if (!visited[i] && !visited[j]) {
                    link += board[i][j] + board[j][i];
                }
            }
        }

        int diff = Math.abs(start - link);
        min = Math.min(min, diff);
    }
}
