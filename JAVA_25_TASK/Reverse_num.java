public class Reverse_num {
    static int rev(int N) {
        int rev = 0, rem;
        while (N != 0) {
            rem = N % 10;
            rev = (rev * 10) + rem;
            N = N / 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        int Num = 4738;
        System.out.println("THE REVERSE OF THE NUMBER IS :" + rev(Num));
    }
}
