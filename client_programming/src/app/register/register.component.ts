import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms'

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public alertMessage = false;

  constructor(
  
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
 
  ) {

  }

  public fbInput= this.fb.group({
  
  your_name:['', Validators.required],
  username: ['', [Validators.required, Validators.pattern("[A-Za-z0-9_]{5,15}")]],
  email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9_]{5,15}")]],
  confirm_password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9_]{5,15}")]]
  
  });

  //public recvInptData: any = this.fbInput.value;

  public sccMsg : any = [];

  public errMsg: any = [{message : 'Both the passwords should be same'}];

  ngOnInit(): void {}

  async registerFun() {

    console.log(this.fbInput.value);

    const url = 'http://localhost:3000/adduser';

    if(this.fbInput.value.password === this.fbInput.value.confirm_password) {

      const recvData = await this.http.post(url, this.fbInput.value).toPromise();

      this.sccMsg = recvData;
      
      this.alertMessage = true;

      console.log(this.sccMsg);
  
      document.querySelector("#alertId").innerHTML = this.sccMsg.message;

      console.log(this.sccMsg.message);
      
      this.fbInput.reset();

    }
    else {

      //console.log(this.errMsg.message);
      
      this.fbInput.reset();

      this.alertMessage = true;

      //document.querySelector("#alertId").innerHTML = "Both the passwords should be same.";

    }

    //this.fbInput.reset();

  }

}

