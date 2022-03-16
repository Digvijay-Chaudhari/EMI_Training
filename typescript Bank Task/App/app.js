"use strict";
exports.__esModule = true;
exports.WithdrawAmount = exports.Withdraw = exports.Deposit = exports.Transaction = exports.Balance = exports.Details = exports.validateEmail = exports.GetEmailID = exports.OpenAccount = exports.run = exports.menuOptions = void 0;
var readline_sync_1 = require("readline-sync");
var Account_1 = require("./Account");
var Current_1 = require("./Current");
var Saving_1 = require("./Saving");
var Accountdetails = new Account_1.Account();
var email = "";
console.log("Welcome to the Bank");
menuOptions();
function menuOptions() {
    console.log("Open Account:1  Account Details:2 Balance:3 Transaction:4    Exit :0");
    run();
}
exports.menuOptions = menuOptions;
function run() {
    var option1 = (0, readline_sync_1.question)("Enter your option:");
    if (option1 == '1') {
        OpenAccount();
    }
    else if (option1 == '2') {
        Details();
    }
    else if (option1 == '3') {
        Balance();
    }
    else if (option1 == '4') {
        Transaction();
    }
    else if (option1 == '0') {
    }
    else {
        console.log("Input not Valid");
        menuOptions();
    }
}
exports.run = run;
function OpenAccount() {
    console.log("Savings Account - 1  Current Account - 2");
    var accountTypeSelected = (0, readline_sync_1.question)("Please Enter youranswer:");
    if (accountTypeSelected == "1") {
        var savingAccount = new Saving_1.Saving();
        savingAccount.name = (0, readline_sync_1.question)("Enter Name:");
        savingAccount.age = Number((0, readline_sync_1.question)("Enter Age:"));
        if (savingAccount.age > 68) {
            console.log("As your age is greater than 68, You are not eligible to create account.");
            menuOptions();
        }
        else {
            savingAccount.location = (0, readline_sync_1.question)("Enter Your Location: ");
            savingAccount.state = (0, readline_sync_1.question)("Enter Your state: ");
            savingAccount.country = (0, readline_sync_1.question)("Enter Your Country: ");
            GetEmailID();
            savingAccount.emailID = email;
            console.log("Savings Account Created Succesfully");
            Accountdetails = savingAccount;
            menuOptions();
        }
    }
    else if (accountTypeSelected == "2") {
        var newcurrentccount = new Current_1.Current();
        newcurrentccount.name = (0, readline_sync_1.question)("Enter Your Name:");
        newcurrentccount.age = Number((0, readline_sync_1.question)("Enter your Age:"));
        if (newcurrentccount.age > 68) {
            console.log("Age is greater than 68, Can't create account.");
            menuOptions();
        }
        else {
            newcurrentccount.location = (0, readline_sync_1.question)("Enter Your Location: ");
            newcurrentccount.state = (0, readline_sync_1.question)("Enter Your state: ");
            newcurrentccount.country = (0, readline_sync_1.question)("Enter Your Country: ");
            GetEmailID();
            newcurrentccount.emailID = email;
            console.log('Current Account Created Succesfully with Account Number :' + newcurrentccount.accountNumber);
            Accountdetails = newcurrentccount;
            menuOptions();
        }
    }
    else {
        console.log("Invalid Answer");
        menuOptions();
    }
}
exports.OpenAccount = OpenAccount;
function GetEmailID() {
    var emailID = (0, readline_sync_1.question)("Enter Your EmailID: ");
    if (!validateEmail(emailID)) {
        console.log("Invalid Email");
        GetEmailID();
    }
    else {
        email = emailID;
    }
}
exports.GetEmailID = GetEmailID;
function validateEmail(Email) {
    if (Email.search('[^ @]*@[^ @]*') == 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateEmail = validateEmail;
function Details() {
    if (Accountdetails.accountNumber == "") {
        console.log("No Account.");
        menuOptions();
    }
    else {
        var name = (0, readline_sync_1.question)("Enter the Customer name:");
        if (name == Accountdetails.name) {
            console.log("Account number:", Accountdetails.accountNumber);
            console.log("Type:", Accountdetails.accountType);
            console.log("Name:", Accountdetails.name);
            console.log("Address:", Accountdetails.location + "," + Accountdetails.state + "," + Accountdetails.country);
            console.log("Email:", Accountdetails.emailID);
            console.log("Balance:", Accountdetails.balance);
            menuOptions();
        }
        else {
            console.log(" Incorrect name");
            menuOptions();
        }
    }
}
exports.Details = Details;
function Balance() {
    if (Accountdetails.accountNumber == "") {
        console.log("No Account.");
        menuOptions();
    }
    else {
        var tmpname = (0, readline_sync_1.question)("Enter the Account Holder Name:");
        if (tmpname == Accountdetails.name) {
            console.log("Balance: " + Accountdetails.balance);
            menuOptions();
        }
        else {
            console.log("In correct Name");
            menuOptions();
        }
    }
}
exports.Balance = Balance;
function Transaction() {
    if (Accountdetails.accountNumber == "") {
        console.log("No Account");
        menuOptions();
    }
    else {
        console.log("Deposit - 1  Withdraw - 2");
        var selected = (0, readline_sync_1.question)("Enter youranswer:");
        if (selected == "1") {
            Deposit();
        }
        else if (selected == "2") {
            Withdraw();
        }
        else {
            console.log("Invalid answer");
            Transaction();
        }
    }
}
exports.Transaction = Transaction;
function Deposit() {
    var accno = (0, readline_sync_1.question)("Enter the Account Number:");
    if (accno == Accountdetails.accountNumber) {
        console.log("Account Balance: " + Accountdetails.balance);
        var amountdepositing = Number((0, readline_sync_1.question)("Enter the Amount: "));
        Accountdetails.balance = Accountdetails.balance + amountdepositing;
        console.log("Deposited " + amountdepositing + " Successfully");
        console.log("Available Balance: " + Accountdetails.balance);
        menuOptions();
    }
    else {
        console.log("In correct Account Number");
        menuOptions();
    }
}
exports.Deposit = Deposit;
function Withdraw() {
    var accno = (0, readline_sync_1.question)("Enter the Account Number:");
    if (accno == Accountdetails.accountNumber) {
        console.log("Account Balance: " + Accountdetails.balance);
        if (Accountdetails.balance > Accountdetails.minimumBalance) {
            console.log("Withdrawble Balance: " + (Accountdetails.balance - Accountdetails.minimumBalance));
            WithdrawAmount();
        }
        else {
            console.log("Balance is low");
            menuOptions();
        }
    }
    else {
        console.log("In correct Account Number");
        menuOptions();
    }
}
exports.Withdraw = Withdraw;
function WithdrawAmount() {
    var amountwithdrawing = Number((0, readline_sync_1.question)("Enter the Amount to be withdraw: "));
    if (Accountdetails.balance - amountwithdrawing <= Accountdetails.minimumBalance) {
        console.log("Insufficient Balance with Minimium Balance ");
        menuOptions();
    }
    else {
        Accountdetails.balance -= amountwithdrawing;
        console.log("Withdrawal of " + amountwithdrawing + " is Successfull");
        console.log("Available Balance: " + Accountdetails.balance);
        menuOptions();
    }
}
exports.WithdrawAmount = WithdrawAmount;
