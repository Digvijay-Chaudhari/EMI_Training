import { Account } from "./Account";


export class Saving extends Account{
    
    constructor()
    {
        super()
        this.minimumBalance=2000;
        this.balance=500;
        this.accountType="Savings";
        this.accountNumber='Sav'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
}