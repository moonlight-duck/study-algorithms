package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.StringTokenizer;

public class boj_18870 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] array = new int[n]; // 원본

        StringTokenizer token =  new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            array[i] = Integer.parseInt(token.nextToken());
        }

        int[] array_copy = array.clone(); // 카피본
        Arrays.sort(array_copy);

        // 카피본의 인덱스 찾기
        HashMap<Integer, Integer> map = new HashMap<>();
        int index = 0;
        for (int i = 0; i < n; i++) {
            if (!map.containsKey(array_copy[i])) {
                map.put(array_copy[i], index);
                index += 1;
            }
        }

        // 결과 출력하기
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(map.get(array[i])).append(" ");
        }
        System.out.println(sb);
    }
}
