import { Account } from "./Account";

export class Current extends Account{

    constructor()
    {
        super();
        this.minimumBalance=1000;
        this.balance=800;
        this.accountType="Current";
        this.accountNumber='Cur'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
   
}