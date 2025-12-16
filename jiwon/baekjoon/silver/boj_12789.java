package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class boj_12789 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        Stack<Integer> line = new Stack<>();    // 한 명씩만 설 수 있는 공간
        int number = 1;                         // 사람 번호

        for (int i = 0; i < n; i++) {
            line.push(Integer.parseInt(token.nextToken()));

            while(!line.isEmpty() && line.peek() == number) {
                line.pop();                     // 간식 받는 곳으로
                number += 1;
            }
        }

        System.out.println(line.isEmpty() ? "Nice" : "Sad");
    }
}
