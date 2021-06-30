export class user{
    firstname:string;
    lastname:string;
    username:string;
    email:string;
    mobileno:number;
    password:string;
    //how to ecrypt password
    constructor(firstname:string, lastname:string, username:string, email:string, mobileno:number, password:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.mobileno = mobileno;
        this.password = password;
    }
}