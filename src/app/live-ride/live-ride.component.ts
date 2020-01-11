import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';
import { ConfirmRideService } from '../service/confirm-ride.service';
import {ur } from './../db/RideRecord';
@Component({
  selector: 'app-live-ride',
  templateUrl: './live-ride.component.html',
  styleUrls: ['./live-ride.component.css']
})
export class LiveRideComponent implements OnInit {

  constructor(private ride:OfferrideService,private cnf:ConfirmRideService) { }
public ridedata:any;
  ngOnInit() {
    this.ride.getRide().subscribe((data)=>{this.ridedata=data;console.log("Fetching")})
  
  }

  confirm(user:ur)
  {
   
   
    this.cnf.confirm(user);
  }



}
