import { Customer } from './Customer';

export class Account{
  private customer: Customer
  amount:number;
  acountnr:string



    constructor(private balance?:number, private accountnr?:string,amount?:number){
          this.accountnr=accountnr;
          this.balance=balance;
          this.amount= amount;
         
        }
        
          getBalance(): number {
            return this.balance;
          }
        
          setbalance(balance: number): void {
            this.balance = balance;
          }
          getCustomer(): Customer {
            return this.customer;
          }
        
          setCustomer(customer: Customer): void {
            this.customer = customer;
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