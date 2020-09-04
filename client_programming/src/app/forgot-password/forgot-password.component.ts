import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { 

  }

  public fbInput = this.fb.group({

    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required]

  });

  public sccMsg: any = [];

  ngOnInit(): void {
  }

  async forgotPassFun () {

    const url = 'http://localhost:3000/forgotpassword';

    if (this.fbInput.value.password === this.fbInput.value.confirm_password) {

      const recvData = await this.http.post(url, this.fbInput.value).toPromise();

      this.sccMsg = recvData;
  
      console.log(this.sccMsg.affectedRows);
  
      if (this.sccMsg.affectedRows != 0) {
  
        document.querySelector("#alertId").innerHTML = "Your new password has been set successfully.";
      } else {
  
        document.querySelector("#alertId").innerHTML = "Please provide correct inputs.";
      }
  
    } else {

      document.querySelector("#alertId").innerHTML = "Your both the passwords should be same.";
    }

    this.fbInput.reset();
  }

}
