package ngp.core.atm;

public class Operation implements IOperation {
	public float balance = 9876.32f;
	public short pin =1001;
	public int count = 0;
	
	public float checkBalance() {
		return this.balance;
	}
	
	public void withDrawl(float amount) {
		if(amount <= this.balance) {
			this.balance -= amount;
		}
		else {
			System.out.println("In sufficient balance.....");
		}
	}
	
	public boolean changePin(short oldPin, short newPin) {
		if(authenticate(oldPin)) {
			this.pin = newPin;
			return true;
		}
		else {
			return false;
		}
	}
	
	public boolean deposit(float amount) {
		this.balance += amount;
		return true;
	}
	
	public boolean authenticate(short customerPin) {
		if(pin == customerPin) return true;
		else count ++;
		return false;
		
	}
}