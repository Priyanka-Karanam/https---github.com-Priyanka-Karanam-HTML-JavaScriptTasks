let bank = {
    accountNumber: 105682390211,
    accountantName:"Karanam Priyanka",
    balance: 60000,

    // deposit amount
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    },

    // withdraw amount
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdraw $${amount}. New balance is $${this.balance}.`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    },

    checkBalance() {
        console.log(`Current balance is $${this.balance}.`);
        return this.balance;
    }
};

bank.deposit(3000);   
bank.withdraw(7000); 
bank.checkBalance(); 

