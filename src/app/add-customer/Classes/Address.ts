import { Customer } from './Customer';

export class Address{
    id:number;
    street:string;
    zipcode:string;
    city: string;
    country:string;
    customer:Customer;

    constructor(street:string, zipcode:string,city: string,country:string){
        this.street=street;
        this.city= city;
        this.zipcode=zipcode;
        this.country= country;
    }
}