import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-show-record',
  templateUrl: './show-record.component.html',
  styleUrls: ['./show-record.component.css']
})
export class ShowRecordComponent implements OnInit {

  public alertMessage = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {
  }

  public fbInput = this.fb.group ({

    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  //public formInput = new FormControl('', Validators.required);

  public recvDataList: any = [];

  async showRecordFun () {

    const inputData = this.fbInput.value;
    console.log(inputData);

    const url = 'http://localhost:3000/showrecords'

    const recvData = await this.http.post(url, inputData).toPromise();

    console.log(recvData);

    this.recvDataList = recvData;

    //console.log(this.recvDataList.length);

    if (this.recvDataList.length != 0) {

      document.querySelector("#recvDataBlock").children[0].innerHTML = this.recvDataList[0].your_name;
      document.querySelector("#recvDataBlock").children[1].innerHTML = this.recvDataList[0].username;
      document.querySelector("#recvDataBlock").children[2].innerHTML = this.recvDataList[0].email;
      document.querySelector("#recvDataBlock").children[3].innerHTML = this.recvDataList[0].password;
      document.querySelector("#recvDataBlock").children[4].innerHTML = this.recvDataList[0].confirm_password;
    } else {

      this.alertMessage = true;
    }


    //console.log(this.recvDataList[0].confirm_password);

    this.fbInput.reset();

  }

}
