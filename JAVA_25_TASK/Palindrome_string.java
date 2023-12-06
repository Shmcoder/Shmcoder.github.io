public class Palindrome_string {
    public static void main(String[] args) {
        String text = "abcdba";
        int i = 0, j = text.length() - 1;
        while (i < j) {
            if (text.charAt(i) != text.charAt(j)) {
                System.out.println("NOT PALINDROME");
                System.exit(0);
            }
            i++;
            j--;
        }
        System.out.println("PALINDROME");
    }
}
