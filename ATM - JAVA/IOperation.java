package ngp.core.atm;

public interface IOperation {
	public float checkBalance();

	public void withDrawl(float amount);

	public boolean changePin(short oldPin, short newPin);

	public boolean deposit(float amount);
	 
	public boolean authenticate(short customerPin);
}