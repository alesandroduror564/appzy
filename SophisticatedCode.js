/*
Filename: SophisticatedCode.js

This code is a simulation of a banking system that allows users to create accounts, deposit and withdraw money, and check their account balance. It also includes error handling and advanced calculations.

*/

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, initialDeposit) {
    const account = new Account(name, initialDeposit);
    this.accounts.push(account);
    console.log(`Account created for ${name}`);
  }

  getAccountBalance(name) {
    const account = this.accounts.find(account => account.name === name);

    if (!account) {
      console.log(`Account not found for ${name}`);
      return;
    }

    console.log(`Account balance for ${name}: $${account.balance}`);
  }

  deposit(name, amount) {
    const account = this.accounts.find(account => account.name === name);

    if (!account) {
      console.log(`Account not found for ${name}`);
      return;
    }

    console.log(`Depositing $${amount} into ${name}'s account`);
    account.balance += amount;
  }

  withdraw(name, amount) {
    const account = this.accounts.find(account => account.name === name);

    if (!account) {
      console.log(`Account not found for ${name}`);
      return;
    }

    if (amount > account.balance) {
      console.log(`Insufficient balance for ${name}`);
      return;
    }

    console.log(`Withdrawing $${amount} from ${name}'s account`);
    account.balance -= amount;
  }
}

class Account {
  constructor(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
  }
}

// Creating bank and accounts
const bank = new Bank();
bank.createAccount("John Doe", 1000);
bank.createAccount("Jane Smith", 500);

// Depositing and withdrawing
bank.deposit("John Doe", 200);
bank.withdraw("Jane Smith", 300);

// Checking account balances
bank.getAccountBalance("John Doe");
bank.getAccountBalance("Jane Smith");