import java.util.Scanner;

class Fibonacci {
    static void fibo(int num) {
        int num1 = 0, num2 = 1;
        int count = 0;
        while (count < num) {
            System.out.print(num1 + " ");
            int num3 = num2 + num1;
            num1 = num2;
            num2 = num3;
            count = count + 1;
        }
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("ENTER THE NUMBER :");
        int num = input.nextInt();
        // int num = 3;
        fibo(num);
    }
}
