// TDC FullStack Assignment No. 6
// Assignment: Bank Account Management System
// Objective:
// Create a system to manage bank accounts using JavaScript classes.
// The system should allow account creation, deposits, withdrawals, and transfers between accounts while ensuring all operations follow the given rules.
// ----------------------------------------------------------------
// Requirements:
// 1. Data Storage:
// Create an empty array named accounts to store all bank accounts.
let accounts = [];
// ----------------------------------------------------------------
// 2. Bank Account Class:
// Create a class BankAccount that should have the following properties: accountNumber: A string that must start with "IN" and be exactly 12 characters long. balance: Initial balance with a minimum limit of ₹1000.

class BankAccount{
    constructor(accountNumber, initialBalance) {
        if(accountNumber.startsWith("IN") && accountNumber.length === 12) {
            this.accountNumber = accountNumber;
        }
        else {
            throw new Error("Account number must start with 'IN' and be exactly 12 characters.");
        }
        if(initialBalance >= 1000) {
            this.balance = initialBalance;
        }
        else {
            throw new Error("Initial balance must be at least ₹1000.");
        }
    }

      // The class should include methods:
  // deposit(amount): Adds money to the account.
    deposit(amount) {
        if(amount > 0) {
            this.balance += amount;
            console.log(`₹${amount} deposited successfully. Current balance: ₹${this.balance}`)
        }
        else {
            console.log("Deposit amount must be greater than zero.");
        }
    }
  // withdraw(amount): Withdraws money while ensuring the minimum balance limit is maintained.
    withdraw(amount) {
        if(amount > 0 && this.balance - amount >= 1000) {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully. Current balance: ₹${this.balance}`);
        }
        else if(amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
        }
        else {
            console.log("Insufficient balance. Minimum balance of ₹1000 must be maintained.");  
        }
    }
  // transfer(amount, targetAccountNumber): Transfers money to another account in the array while validating sufficient funds.
    transfer(amount, targetAccountNumber) {
        //Find target account
        let targetAccount = accounts.find(account => account.accountNumber === targetAccountNumber);

        if(targetAccount) {
            if(amount > 0 && this.balance - amount >= 1000) {
                this.balance -= amount;
                targetAccount.balance += amount;
                console.log(`₹${amount} transferred successfully to account ${targetAccountNumber}.`);
                console.log(`Your new balance: ₹${this.balance}`);
                console.log(`Target account balance: ₹${targetAccount.balance}`);                
            }
            else if(amount <= 0) {
                console.log("Transfer amount must be greater than zero.");
            }
            else {
                console.log("Insufficient balance. Minimum balance of ₹1000 must be maintained.");
            }
        }
        else {
            console.log("Target account not found.");
        }
    }
}
// ----------------------------------------------------------------
// 3. Account Creation Function:
// Write a function createAccount(accountNumber, initialAmount) that:
function createAccount(accountNumber, initialAmount) {
    try {
        let account = new BankAccount(accountNumber, initialAmount);
        accounts.push(account);
        console.log(`Account with number ${accountNumber} created successfully.`);
    }
    catch (error) {
        console.log(error.message);
    }
}
// Ensures the accountNumber starts with "IN" and is 12 characters long.
// Ensures initialAmount is at least ₹1000.
// If valid, creates an instance of BankAccount and adds it to the accounts array.z
// ----------------------------------------------------------------
// 4. Transactions:
// Implement deposit, withdraw, and transfer functionalities. Ensure proper validation before performing any transaction.    
// Example Usage:
// Creating accounts
createAccount("IN1234567890", 5000); 
createAccount("IN0987654321", 3000);

// Depositing money
accounts[0].deposit(2000);

// Withdrawing money
accounts[1].withdraw(500);

// Transferring money
accounts[0].transfer(1000, "IN0987654321");
// ----------------------------------------------------------------
// Bonus Challenge:
// Display Account Details: Implement a function to print details of all accounts. Handle Errors Properly: Display meaningful messages if transactions fail.

// Function to display account details
function displayAccountDetails() {
    if(accounts.length === 0) {
        console.log("No accounts found.");
    }
    else {
        accounts.forEach(account => {
            console.log(`Account Number: ${account.accountNumber}, Balance: ₹${account.balance}`);
        });
    }
}

// Display all account details
displayAccountDetails();

