package baekjoon.gold;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_2580 {
    public static int[][] board = new int[9][9];
    static boolean finished = false;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        for (int i = 0; i < 9; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < 9; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        dfs(0, 0);

    }

    static void dfs(int row, int col) {
        if (row == 9) {
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    System.out.print(board[i][j] + " ");
                }
                System.out.println();
            }

            finished = true;
            return;
        }

        if (col == 9) { // 다음줄로 이동
            dfs(row + 1, 0);
            return;
        }

        if (board[row][col] != 0) {
            dfs(row, col + 1);
            return;
        }

        for (int num = 1; num <= 9; num++) {
            if (isPossible(row, col, num)) {
                board[row][col] = num;
                dfs(row, col + 1);

                board[row][col] = 0; // 돌아왔으니

                if (finished) {
                    return;
                }
            }
        }
    }

    static boolean isPossible(int row, int col, int num) {
        // 행/열에 같은 숫자가 있는지
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num) {
                return false;
            }
        }

        int sr = (row / 3) * 3;
        int sc = (col / 3) * 3;

        // 그룹에 같은 숫자가 있는데
        for (int i = sr; i < sr + 3; i++) {
            for (int j = sc; j < sc + 3; j++) {
                if (board[i][j] == num) {
                    return false;
                }
            }
        }

        return true;
    }
}
