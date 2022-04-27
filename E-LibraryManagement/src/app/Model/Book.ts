export class Book{
    id:number;
    bookName:string;
    auther:string;
    issuedDate:Date;
    isAvailable:boolean;

    constructor(id:number,bookName:string,auther:string,issuedDate:Date,isAvailable:boolean){
        this.id=id;
        this.bookName=bookName;
        this.auther=auther;
        this.issuedDate=issuedDate;
        this.isAvailable=isAvailable;
    }
    
}