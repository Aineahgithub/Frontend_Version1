import { Customer } from './Customer';

export class Address{
    id:number;
    street:string;
    zipCode:string;
    city: string;
    country:string;
    customer:Customer;

    constructor(street:string, zipcode:string,city: string,country:string){
        this.street=street;
        this.city= city;
        this.zipCode=zipcode;
        this.country= country;
    }
}