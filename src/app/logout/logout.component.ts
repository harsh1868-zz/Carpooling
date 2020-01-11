import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private  router:Router ) { }

  ngOnInit() {

  }

  logout()
  {

    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigate(['/home']);
  }

  nologout()
  {
    this.router.navigate(['/home']);
  }



}
