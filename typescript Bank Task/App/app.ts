import {question} from "readline-sync";
import { Account } from "./Account";
import { Current } from "./Current";
import { Saving } from "./Saving";

var Accountdetails=new Account();
var email:string= "";

console.log("Welcome to the Bank");
menuOptions();

export function menuOptions()
{
    console.log("Open Account:1  Account Details:2 Balance:3 Transaction:4    Exit :0");
    run();
}


export function run()
{
    var option1:string= question("Enter your option:");

    if(option1=='1')
    {
        OpenAccount();
    }
    else if(option1=='2')
    {
        Details();
    }
    else if(option1=='3')
    {
        Balance();
    }
    else if(option1=='4')
    {
        Transaction();
    }
    else if(option1=='0')
    {
        
    }
    else{
        console.log("Input not Valid");
        menuOptions();
    }
}

export function OpenAccount()
{
    console.log("Savings Account - 1  Current Account - 2");
    var accountTypeSelected:string= question("Please Enter youranswer:");
    if(accountTypeSelected=="1")
    {
      var savingAccount = new Saving();
      savingAccount.name= question("Enter Name:");
      savingAccount.age = Number(question("Enter Age:"));
      if(savingAccount.age>68)
      {
          console.log("As your age is greater than 68, You are not eligible to create account.");
          menuOptions();
      }
      else
      {
        savingAccount.location=question("Enter Your Location: ");
        savingAccount.state=question("Enter Your state: ");
        savingAccount.country=question("Enter Your Country: ");        
        GetEmailID(); 
        savingAccount.emailID=email;        
        console.log("Savings Account Created Succesfully");
        Accountdetails=savingAccount;

        menuOptions();
      }
            
    }
    else if(accountTypeSelected=="2")
    {
        var newcurrentccount = new Current();
        newcurrentccount.name= question("Enter Your Name:");
        newcurrentccount.age = Number(question("Enter your Age:"));
      if(newcurrentccount.age>68)
      {
          console.log("Age is greater than 68, Can't create account.");
          menuOptions();
      }
      else
      {
        newcurrentccount.location=question("Enter Your Location: ");
        newcurrentccount.state=question("Enter Your state: ");
        newcurrentccount.country=question("Enter Your Country: ");
        GetEmailID(); 
        newcurrentccount.emailID=email;        
        console.log('Current Account Created Succesfully with Account Number :'+newcurrentccount.accountNumber);
        Accountdetails=newcurrentccount;

        menuOptions();
      }

    }
    else{
        console.log("Invalid Answer")
        menuOptions();
    }
}

export function GetEmailID():void
{
   var emailID:string = question("Enter Your EmailID: ");
   if(!validateEmail(emailID))
   {
       console.log("Invalid Email");
       GetEmailID();
   } 
   else{
    email=emailID;
   }  
   
}
export function validateEmail(Email:string):boolean
{
    if(Email.search('[^ @]*@[^ @]*')==0)
    {
        return true;
    }
    else{
        return false;
    }
    
}

export function Details():void
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No Account.");
        menuOptions();
    }
    else{
        var name:string = question("Enter the Customer name:");
        if(name==Accountdetails.name)
        {
            console.log("Account number:",Accountdetails.accountNumber);
            console.log("Type:",Accountdetails.accountType);
            console.log("Name:",Accountdetails.name);
            console.log("Address:",Accountdetails.location+","+Accountdetails.state+","+Accountdetails.country);
            console.log("Email:",Accountdetails.emailID);
            console.log("Balance:",Accountdetails.balance);

            menuOptions();
        }
        else{
            console.log(" Incorrect name");           
            menuOptions();
        }
    }

}
export function Balance()
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No Account.");
        menuOptions();
    }
    else{
        var tmpname:string = question("Enter the Account Holder Name:");
        if(tmpname==Accountdetails.name)
        {
            console.log("Balance: "+Accountdetails.balance);
            menuOptions();
        }
        else{
            console.log("In correct Name");
            
            menuOptions();
        }
    }
}
export function Transaction()
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No Account");
        menuOptions();
    }
    else{
        console.log("Deposit - 1  Withdraw - 2");
        var selected:string =question("Enter youranswer:");
        if(selected=="1")
        {
            Deposit();
        }
        else if(selected=="2"){
            Withdraw();
        }
        else{
            console.log("Invalid answer");
            Transaction();
        }
    
    }
}

export function Deposit()
{    
    var accno:string = question("Enter the Account Number:");
    if(accno==Accountdetails.accountNumber)
    {
        console.log("Account Balance: "+ Accountdetails.balance);
        var amountdepositing:number = Number(question("Enter the Amount: "));
        Accountdetails.balance= Accountdetails.balance+amountdepositing;
        console.log("Deposited "+amountdepositing+" Successfully")
        console.log("Available Balance: "+ Accountdetails.balance); 
        menuOptions();              
    }
    else{
        console.log("In correct Account Number");
        
        menuOptions();
    }
}
export function Withdraw()
{
    var accno:string = question("Enter the Account Number:");
    if(accno==Accountdetails.accountNumber)
    {
        console.log("Account Balance: "+ Accountdetails.balance);        
        if(Accountdetails.balance>Accountdetails.minimumBalance)
        {
            console.log("Withdrawble Balance: "+ (Accountdetails.balance-Accountdetails.minimumBalance));
            WithdrawAmount();                                     
        }
        else{
            console.log("Balance is low");
            menuOptions();
        }             
    }
    else{
        console.log("In correct Account Number");
       
        menuOptions();
    }
}

export function WithdrawAmount():void
{
   var amountwithdrawing:number = Number(question("Enter the Amount to be withdraw: "));
   if(Accountdetails.balance-amountwithdrawing<=Accountdetails.minimumBalance)
   {
        console.log("Insufficient Balance with Minimium Balance ");       
        
        menuOptions();      
   } 
   else{
        Accountdetails.balance-=amountwithdrawing;
        console.log("Withdrawal of "+amountwithdrawing+" is Successfull")
        console.log("Available Balance: "+ Accountdetails.balance);  
        menuOptions();
   }  
}
