import { Address } from './Address';
import { Login } from './Login';
export class Customer {
    customer_id: number;
    firstName:string;
    lastName: String;
    age: number;
    login:Login;
    //accounts :Account[];
    //address:Address;
    telephone:string;
    email:string;
    address: Address

    constructor(firstName?:string,lastName?:string, age?:number, telephone?:string, email?:string,address?:Address,login?:Login){
        this.age= age;
        this.lastName= lastName;
        this.firstName = firstName;
        this.telephone= telephone;
        this.email= email;
        this.address=address;
        this.login=login;
    }
}