public class BiG_Among_Three {
    static int larger(int a, int b, int c) {
        return c > (a > b ? a : b) ? c : ((a > b) ? a : b);
    }

    public static void main(String[] args) {
        int a = 10, b = 3, c = 8;
        int result = larger(a, b, c);
        System.out.println("LARGEST IS :" + result);
    }

}
