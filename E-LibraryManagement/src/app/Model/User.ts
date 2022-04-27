export class User{
    id:Number;
    userName:string;
    requestCount:number;
    // map: any;

    constructor(id:Number,userName:string,requestCount:number){
        this.id=id;
        this.userName=userName;
        this.requestCount=requestCount;
    }

}