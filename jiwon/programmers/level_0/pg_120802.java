package programmers.level_0;

import java.io.IOException;

public class pg_120802 {
    public static void main(String[] args) throws IOException {
        String[] input = {"call", "respiration", "repeat", "check", "pressure"};
        int[] result = solution(input);

        System.out.println(result[0] + " " + result[1] + " " + result[2] + " " + result[3] + " " + result[4]);
    }

    public static int[] solution(String[] cpr) {
        int[] answer = {0, 0, 0, 0, 0};
        String[] basic_order = {"check", "call", "pressure", "respiration", "repeat"};

        for(int i=0; i<cpr.length; i++){
            for(int j=0; j<basic_order.length; j++){
                if(cpr[i].equals(basic_order[j])){
                    answer[i] = j+1;
                    break;
                }
            }
        }
        return answer;
    }
}
