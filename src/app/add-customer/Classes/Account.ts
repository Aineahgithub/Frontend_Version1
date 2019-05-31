import { Customer } from './Customer';

export class Account{
  
  id:number;
  type:String
  accountnr:string
  customer_id: number
  


    constructor(private balance?:number,  accountnr?:string,type?:string, customer_id?:number){
          this.accountnr=accountnr;
          this.balance=balance;
          this.type= type;
          this.customer_id= customer_id;
         
        }
        
          getBalance(): number {
            return this.balance;
          }
        
          setbalance(balance: number): void {
            this.balance = balance;
          }

          setDeposit(amount:number): void {
            this.balance  = this.balance + amount;
          }
          getDeposit(): number {
            return this.balance;
          }
          setWithdraw(amount:number): void {
            this.balance  = this.balance - amount;
          }
          getWithdraw(): number {
            return this.balance;
          }
}