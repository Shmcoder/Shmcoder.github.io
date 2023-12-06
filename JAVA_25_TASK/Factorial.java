public class Factorial {
    static int Fact(int N) {
        int i, Result = 1;
        for (i = 2; i <= N; i++)
            Result = Result * i;
        return Result;
    }

    public static void main(String[] args) {
        int num = 5;
        System.out.print("THE FACTORIAL OF " + num + " IS " + (Fact(num)));
    }
}
