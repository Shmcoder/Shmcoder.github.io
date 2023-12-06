import java.util.Scanner;

public class ASCII {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("ENTER ANY CHARACTER :");
        char ch = input.next().charAt(0);
        int a = ch;
        System.out.println("ASCII VALUE IS :" + a);
    }
}
