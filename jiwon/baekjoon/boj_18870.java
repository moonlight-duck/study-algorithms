package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class boj_18870 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] array = new int[n]; // 원본
        int[] array_index = new int[n];

        int[] array_copy = new int[n]; // 원본의 오름차순
        int[] array_copy_index = new int[n];

        StringTokenizer token =  new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(token.nextToken());
            array[i] = num;
            array_copy[i] = num;
        }

        Arrays.sort(array_copy);

        // 오름차순한 배열의 인덱스
        array_copy_index[0] = 0; // 첫번째 수는 인덱스 0
        for (int i = 1; i < n; i++) {
            if (array_copy[i-1] == array_copy[i]) { // 이전과 동일한 수라면
                array_copy_index[i] = array_copy_index[i-1]; // 동일한 인덱스
            } else {
                array_copy_index[i] = array_copy_index[i-1] + 1;
            }
        }

        // 원본 배열의 인덱스 찾기
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (array[i] == array_copy[j]) {
                    array_index[i] = array_copy_index[j];
                    break;
                }
            }
        }

        // 결과 출력하기
        StringBuilder sb = new StringBuilder();
        sb.append(array_index[0]);
        for (int i = 1; i < n; i++) {
            sb.append(" ").append(array_index[i]);
        }
        System.out.println(sb);
    }
}
