import { Component, OnInit } from '@angular/core';

import { LoginService } from '../service/login.service';
var name:any
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private ls:LoginService) { }
  public totaluser:any;
  public totalride:any;

  ngOnInit() {
    this.ls.getUser().subscribe((data)=>{this.totaluser=data;console.log(this.totaluser)});
    this.ls.getallRide().subscribe((data)=>{this.totalride=data;console.log(this.totaluser)});

  }
  name=localStorage.getItem("admin");

}
