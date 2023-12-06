import java.util.Scanner;

public class Even_num {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("ENTER THE FINAL : ");
        int Finl = input.nextInt();
        int i;
        System.out.println("THE LIST OF ODD NUM UPTO " + Finl + " IS: ");
        for (i = 1; i <= Finl; i++) {
            if (i % 2 != 0) {
                System.err.println(i);
            }
        }
    }
}
