package ngp.core.atm;

import java.util.Scanner;

public class Main_ATM {
	static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        runATM();
    }

    public static void runATM() {
        
        IOperation operation = new Operation();
        short val = 0;
        do {
            showMenu();
            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                	if(operation.authenticate(pin(val))){
                		System.out.println("Enter the amount to withdraw: ");
                        float withdrawAmount = scanner.nextFloat();
                        operation.withDrawl(withdrawAmount);
                	}else {
                		System.out.println("PassWord Is Invalid");
                	}
                    break;
                case 2:
                	if(operation.authenticate(pin(val))){
                		System.out.println("Enter the amount to deposit: ");
                        float depositAmount = scanner.nextFloat();
                        operation.deposit(depositAmount);
                	}else {
                		System.out.println("PassWord Is Invalid");
                	}
                    break;
                case 3:
                	if(operation.authenticate(pin(val))){
                		System.out.println("Balance: " + operation.checkBalance());
                	}else {
                		System.out.println("PassWord Is Invalid");
                	}
                    break;
                case 4:
                    System.out.println("Enter current PIN: ");
                    short currentPin = scanner.nextShort();
                    System.out.println("Enter new PIN: ");
                    short newPin = scanner.nextShort();
                    if (operation.changePin(currentPin, newPin)) {
                        System.out.println("PIN changed successfully.");
                    } else {
                        System.out.println("Failed to change PIN. Incorrect current PIN.");
                    }
                    break;
                case 5:
                    System.out.println("Exiting ATM. Goodbye!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }

        } while (true);
    }

    public static void showMenu() {
        System.out.println("\n1. WITHDRAW\n2. DEPOSIT\n3. CHECK BALANCE\n4. CHANGE PIN\n5. EXIT\n");
        System.out.println("Enter your choice: ");
    }
    public static short pin(short Pin) {
    	System.out.println("Enter current PIN: ");
        short Pin1 = scanner.nextShort();
		return Pin1;
    	
    }
}
