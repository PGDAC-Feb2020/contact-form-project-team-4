import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,

  ) { 

  }

  ngOnInit(): void {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['log-in']);
    }
  }

  /*
  linkList: any = [

    { title: 'Record  Operations', link: 'home-page/record-operations' },
    { title: 'About Us', link: 'home-page/about-us' },
    { title: 'Contact Us', link: 'home-page/contact-us' }
  ];

  linkFun(input) {

    this.router.navigate([input]);
  };
  */

  logoutFun () {

    sessionStorage.removeItem('sid');
    this.router.navigate(['log-in']);
  }

}
