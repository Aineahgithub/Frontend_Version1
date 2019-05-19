import { Address } from './Address';

export class Customer {
    id: number;
    firstName:string;
    lastName: String;
    age: number;
    date:Date;
    accounts :Account[];
    address:Address;
    constructor(firstName?:string,lastName?:string, age?:number){
        this.age= age;
        this.lastName= lastName;
        this.firstName = firstName;
    }
}