package baekjoon.gold;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_9663 {
    public static int count = 0;
    public static int[] board; // board[row] = col;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        board = new int[n];

        dfs(0, n);

        System.out.println(count);
    }

    private static void dfs(int row, int n) {
        if (row == n) {
            count += 1;
            return;
        }

        for (int col = 0; col < n; col++) {
            board[row] = col;
            if (isPossible(row)) {
                dfs(row+1, n);
            }
        }
    }

    private static boolean isPossible(int row) {
        for (int i =0; i < row; i++) {
            if (board[i] == board[row] || Math.abs(row - i) == Math.abs(board[row] - board[i])) {
                return false;
            }
        }

        return true;
    }
}
