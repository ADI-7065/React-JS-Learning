function createBankAccount(intialBalance) {
  // let balance = intialBalance;
  var balance = intialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited:" + balance);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
      } else {
        balance -= amount;
        console.log("Balance:" + balance);
      }
    },
  };
}
const account = createBankAccount(1000);
account.deposit(500); // Deposited:1500
account.withdraw(200); // Balance:1300
