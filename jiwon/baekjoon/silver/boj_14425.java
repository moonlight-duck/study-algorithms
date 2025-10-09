package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class boj_14425 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token;

        token = new StringTokenizer(br.readLine(), " ");
        int n =  Integer.parseInt(token.nextToken());
        int m =  Integer.parseInt(token.nextToken());

        HashMap<String, String> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            String word = br.readLine();
            map.put(word, word);
        }

        int count = 0;
        for (int i = 0; i < m; i++) {
            String find = br.readLine();
            if (map.containsKey(find)) {
                count += 1;
            }
        }

        System.out.println(count);
    }
}
