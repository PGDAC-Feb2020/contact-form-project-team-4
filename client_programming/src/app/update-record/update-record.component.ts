import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl } from '@angular/forms'

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {

  constructor(

    private http: HttpClient,
    private fb: FormBuilder
  ) { 

  }

  public fbInput = this.fb.group({

    email: ['', Validators.required],
    password: ['', Validators.required],
    your_name: ['', Validators.required],
    username: ['', Validators.required],
    address: ['', Validators.required],
    mobile: ['', Validators.required]

  });

  ngOnInit(): void {
  }

  public sccMsg: any = [];

  async updateRecordFun() {

    const recvInputData = this.fbInput.value;

    const url = 'http://localhost:3000/updaterecords';
    
    const recvData = await this.http.post(url, recvInputData).toPromise();

    //console.log(recvData);

    this.sccMsg = recvData;

    //console.log(this.sccMsg);

    if (this.sccMsg.affectedRows != 0) {
      
      document.querySelector("#alertId").innerHTML = this.sccMsg.message;
    } else {

      document.querySelector("#alertId").innerHTML = "Please provide correct inputs.";
    }

    this.fbInput.reset();
  }

}
