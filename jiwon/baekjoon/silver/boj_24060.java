package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_24060 {
    private static int[] array;
    private static int a, k;

    private static int count = 0;
    private static int result = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(br.readLine(), " ");
        a = Integer.parseInt(token.nextToken());
        k = Integer.parseInt(token.nextToken());
        array = new int[a];

        token = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < a; i++) {
            array[i] = Integer.parseInt(token.nextToken());
        }

        mergeSort(0, a-1);

        if (count < k) {
            System.out.println(-1);
        } else {
            System.out.println(result);
        }
    }

    private static void mergeSort(int p, int r) {
        if (p < r) {
            int q = (p + r) / 2;
            mergeSort(p, q);
            mergeSort(q+1, r);
            merge(p, q, r);
        }
    }

    // 각각 정렬되어 있는 두 배열을 합친다
    private static void merge(int p, int q, int r) {
        int[] tmp = new int[r-p+1];

        int i = p;
        int j = q+1;
        int t = 0;

        while (i <= q && j <= r) {
            if (array[i] <= array[j]) {
                tmp[t++] = array[i++];
            } else {
                tmp[t++] = array[j++];
            }
        }

        while (i <= q) { // 왼쪽 배열이 남은 경우
            tmp[t++] = array[i++];
        }

        while (j <= r) { // 오른쪽 배열이 남은 경우
            tmp[t++] = array[j++];
        }

        i = p;
        t = 0;

        while (i <= r) {
            array[i] = tmp[t];
            count += 1;

            if (count == k) {
                result = array[i];
            }

            i++;
            t++;
        }
    }
}
