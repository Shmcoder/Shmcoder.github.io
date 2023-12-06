public class palindrome {
    static int reverse(int N){
        int result = 0;
        while (N!=0) {
            result = (result*10) + (N%10);
            N=N/10;
        }
        return result;
    }
    public static void main(String[]args){
        int NUM = 123421;
        int result = reverse(NUM);
        if(NUM==result){
            System.out.print("THE NUMBER IS PALINDROME");
        }else{
            System.out.print("THE NUMBER IS NOT A PALINDROME");
        }
    }
}
