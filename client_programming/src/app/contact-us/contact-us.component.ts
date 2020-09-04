import { Component, OnInit } from '@angular/core';


import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public alertMessage = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { 

  }

  ngOnInit(): void {
  }

  public fbInput = this.fb.group({

    your_name: ['',Validators.required],
    email: ['',Validators.required],
    mobile:['',Validators.required],
    subject:['', Validators.required], 
    comment:['',Validators.required],
    

  });

  public sccMsg: any = [];

  async contactUsFun () {

    const url = 'http://localhost:3000/contactus';

    const recvData = await this.http.post(url, this.fbInput.value).toPromise();
    
    this.sccMsg = recvData;    
    
    this.alertMessage = true;

    this.fbInput.reset();

    document.querySelector("#alertId");

    document.querySelector("#alertId").innerHTML = "Your inserted data has been submitted successfully.";
    //document.querySelector("#alertId").innerHTML = this.sccMsg.message;

  }

  /* 

    if (this.sccMsg.affectedRows != 0) {

      this.alertMessage = true;

      this.fbInput.reset();
  
      document.querySelector("#alertId");
  
      document.querySelector("#alertId").innerHTML = "Your inserted data has been added successfully.";
      //document.querySelector("#alertId").innerHTML = this.sccMsg.message;

    } else {

      this.alertMessage = true;

      this.fbInput.reset();

      document.querySelector("#alertId").innerHTML = "Please check your inputs.";
    }

  */

}
