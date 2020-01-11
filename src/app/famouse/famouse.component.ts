import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';

@Component({
  selector: 'app-famouse',
  templateUrl: './famouse.component.html',
  styleUrls: ['./famouse.component.css']
})

export class FamouseComponent implements OnInit {

  constructor(private ride:OfferrideService) { }
  public ridedata:any;
  ngOnInit() {
    this.ride.getFamouseRide().subscribe((data)=>{this.ridedata=data;console.log("Fetching"+this.ridedata)})

    }

}
