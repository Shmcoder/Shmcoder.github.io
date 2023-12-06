import java.util.Scanner;

class Prime {
    static void prime_num(int num){
        int i,M=0,count=0;
        M=num/2;
        if(num==0||num==1){
            System.out.print(num+" IS NOT A PRIME NUMBER");
        }else{
            for(i=2;i<=M;i++){
                if(num%i==0){
                    System.out.print(num+" IS NOT A PRIME NUMBER");
                    count=1;
                    break;
                }
            }
            if(count==0){
                System.out.print(num+" IS A PRIME NUMBER");
            }
        }
    }
    public static void main(String []args){
        Scanner input = new Scanner(System.in);
        System.out.print("ENTER THE NUMBER :");
        int N=input.nextInt();
        prime_num(N);
    }
}
