import { Address } from './Address';
export class Customer {
    id: number;
    firstName:string;
    lastName: String;
    age: number;
    date:Date;
    accounts :Account[];
    address:Address;
    telephone:string;
    email:string;

    constructor(firstName?:string,lastName?:string, age?:number, telephone?:string, email?:string){
        this.age= age;
        this.lastName= lastName;
        this.firstName = firstName;
        this.telephone= telephone;
        this.email= email;
    }
}