package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class boj_1269 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        int n = Integer.parseInt(token.nextToken());
        int m = Integer.parseInt(token.nextToken());

        HashMap<Integer, Integer> mapA = new HashMap<>();
        HashMap<Integer, Integer> mapACopy = new HashMap<>();
        HashMap<Integer, Integer> mapB = new HashMap<>();
        HashMap<Integer, Integer> mapBCopy = new HashMap<>();

        // 첫번째 리스트 입력 받기
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(token.nextToken());
            mapA.put(num, num);
            mapACopy.put(num, num);
        }

        // 두번째 리스트 입력 받기
        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < m; i++) {
            int num = Integer.parseInt(token.nextToken());
            mapB.put(num, num);
            mapBCopy.put(num, num);
        }

        mapA.forEach((k, v) -> {
            if (mapBCopy.containsKey(k)) {
                mapBCopy.remove(k);
            }
        });

        mapB.forEach((k, v) -> {
            if (mapACopy.containsKey(k)) {
                mapACopy.remove(k);
            }
        });

        System.out.println(mapACopy.size() + mapBCopy.size());
    }
}
