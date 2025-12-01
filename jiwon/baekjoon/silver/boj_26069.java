package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class boj_26069 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer token;
        Set<String> dances = new HashSet<String>();
        dances.add("ChongChong");

        for (int i = 0; i < n; i++) {
            token = new StringTokenizer(br.readLine(), " ");
            String left = token.nextToken();
            String right = token.nextToken();

            if (!dances.isEmpty() && dances.contains(left)) {
                dances.add(right);
            }

            if (!dances.isEmpty() && dances.contains(right)) {
                dances.add(left);
            }
        }

        System.out.println(dances.size());
    }
}
