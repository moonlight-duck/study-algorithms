package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class boj_12789 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean success = true;

        int n = Integer.parseInt(br.readLine());

        StringTokenizer token = new  StringTokenizer(br.readLine(), " ");
        List<Integer> line = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int input = Integer.parseInt(token.nextToken());
            line.add(input);
        }

        // 5 4 1 3 2
        List<Integer> passed = new ArrayList<>();
        List<Integer> waited = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            int index = 0;

            while (!line.isEmpty() || !waited.isEmpty()) {
                if (!line.isEmpty() && line.get(index) == i) { // 라인 맨 앞에 있거나
                    passed.add(line.get(index));
                    line.remove(index);
                    break;
                } else if (!waited.isEmpty() && waited.get(waited.size()-1) == i) { // 대기 맨 뒤에 있거나
                    passed.add(waited.get(waited.size()-1));
                    waited.remove(waited.size()-1);
                    break;
                } else {
                    waited.add(line.get(index));
                    line.remove(index);
                }
            }

            System.out.println("===== line =====");
            line.forEach(System.out::print);
            System.out.println();

            System.out.println("===== passed =====");
            passed.forEach(System.out::print);
            System.out.println();

            System.out.println("===== waited =====");
            waited.forEach(System.out::print);
            System.out.println();

            if (passed.get(passed.size()-1) != i) {
                success = false;
                break;
            }
        }

        if (success) {
            System.out.println("Nice");
        } else {
            System.out.println("Sad");
        }
    }
}
