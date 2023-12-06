public class pattern {
    public static void main(String args[]) {

        System.out.println("\n\n");
        pat_1(5);
        System.out.println("\n\n");
        pat_2(5);
        System.out.println("\n\n");
        pat_3a(5);  
        System.out.println("\n\n");
        pat_3b(5);
        System.out.println("\n\n");
        pat_4(5);
        System.out.println("\n\n");
        pat_5(5);
        System.out.println("\n\n");
        pat_6(5);
        System.out.println("\n\n");
        pat_7(5);
    }

    /*

     * 
     * *
     * * *
     * * * *
     * * * * *
     */
    static void pat_1(int num) {
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print("* ");
            }
            System.out.println(" ");
        }
    }
  
    /*
     * 
     * * * * *
     * * * * *
     * * * * *
     * * * * *
     * * * * *
     */
    static void pat_2(int num) {
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= num; col++) {
                System.out.print("* ");
            }
            System.out.println(" ");
        }
    }

    /*
     * 1
     * 1 2
     * 1 2 3
     * 1 2 3 4
     * 1 2 3 4 5
     * 
     */
    static void pat_3a(int num) {
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col + " ");
            }
            System.out.println(" ");
        }
    }

    /*
     * 1
     * 2 2
     * 3 3 3
     * 4 4 4 4
     * 5 5 5 5 5
     */
    static void pat_3b(int num) {
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(row + " ");
            }
            System.out.println(" ");
        }
    }

    /*
     * 
     * 1 2 3 4 5
     * 1 2 3 4 5
     * 1 2 3 4 5
     * 1 2 3 4 5
     * 1 2 3 4 5
     */
    static void pat_4(int num) {
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= num; col++) {
                System.out.print(col + " ");
            }
            System.out.println(" ");
        }
    }

    /*
     * A
     * B B
     * C C C
     * D D D D
     * E E E E E
     */
    static void pat_5(int num) {
        char ch = 'A';
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(ch + " ");
            }
            ch++;
            System.out.println(" ");
        }
    }

    /*
     * A
     * A B
     * A B C
     * A B C D
     * A B C D E
     */
    static void pat_6(int num) {
        for (int row = 1; row <= num; row++) {
            char ch = 'A';
            for (int col = 1; col <= row; col++) {
                System.out.print(ch + " ");
                ch++;
            }
            System.out.println(" ");
        }
    }

    /*
     * A
     * B C
     * D E F
     * G H I J
     * K L M N O
     */
    static void pat_7(int num) {
        char ch = 'A';
        for (int row = 1; row <= num; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(ch + " ");
                ch++;
            }
            System.out.println(" ");
        }
    }
}
