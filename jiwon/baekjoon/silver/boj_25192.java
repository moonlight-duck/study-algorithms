package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class boj_25192 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int hello = 0;
        Set<String> chats = new HashSet<>();

        for (int i = 0; i < n; i++) {
            String chat = br.readLine();

            if (Objects.equals("ENTER", chat)) {
                hello += chats.size();
                chats = new HashSet<>();
            } else {
                chats.add(chat);
            }
        }

        hello += chats.size();
        System.out.println(hello);
    }
}
