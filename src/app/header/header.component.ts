import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import {ur } from './../db/user.models';
import { OfferrideService } from '../service/offerride.service';
 let myItem:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private pastr:OfferrideService,private service:LoginService) { }
  public userdata:any;

  public pastridedata:any;
  
  ngOnInit() {
   //  this.ride.getFamouseRide().subscribe((data)=>{this.ridedata=data;console.log("Fetching"+this.ridedata)})
  }
  
  // pastRide(user)
  // {
  //  console.log(myItem);
   
  //   this.pastr.getpast1(user);
  // }

//name:localStorage.getItem("name"),
myItem=localStorage.getItem("name")
myId = localStorage.getItem("id");




}
