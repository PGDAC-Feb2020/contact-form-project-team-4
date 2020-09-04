import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public alertMessage = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { 

  }

  public fbInput = this.fb.group({
    
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public recvAuthData: any = [];
  
  //public inputData: any = [];

  ngOnInit(): void {
  }

  async loginFun() {
  
    const recvInputData = this.fbInput.value;

    // ajax call
  
    const url = 'http://localhost:3000/authuser';
  
    const recvData = await this.http.post(url, recvInputData).toPromise();

    //console.log(recvAuthData);

    this.recvAuthData = recvData;

    
    if (this.recvAuthData.length != 0) {
 
      console.log(this.recvAuthData);

      if (this.recvAuthData[0].email === this.fbInput.value.email) {
    
        sessionStorage.setItem('sid', 'true');

        this.fbInput.reset();

        this.router.navigate(['home-page/record-operations']);
      } else {
    
        this.alertMessage = true;
      }
    } else {

      this.alertMessage = true;

      this.fbInput.reset();

      //document.querySelector("#alertId").innerHTML = "Please provide valid credentials."
    }

    //this.fbInput.reset();
  }

}
