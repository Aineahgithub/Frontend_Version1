export class MoneyTransfer{
    toAccountId: number;
    fromAccountId: number;
    amount: number;
    message:string;
    date:Date;

    constructor(toAccountId:number,fromAccountId: number, amount:number, message:string,date:Date){
        this.toAccountId= toAccountId;
        this.fromAccountId= fromAccountId;
        this.amount= amount;
        this.message= message;
        this.date= date;
    }
}