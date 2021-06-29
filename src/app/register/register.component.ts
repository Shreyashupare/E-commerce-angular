import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../user/user';
import { ConfirmedValidator } from '../confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userlist:Array<user>;
  signupform: FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) { 
    this.userlist = new Array<user>();
    this.signupform = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required]),
      mobileno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      //confirmpassword: new FormControl('',[Validators.required])

    })
  }

  ngOnInit(): void {
  }
  register(){
    this.submitted = true;
    if(this.signupform.invalid){
      return;
    }
  }

  get sf(){
    return this.signupform.controls;
  }
}
