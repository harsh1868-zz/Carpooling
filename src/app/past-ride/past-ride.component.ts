import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';
import { ur } from './../db/RideRecord'
@Component({
  selector: 'app-past-ride',
  templateUrl: './past-ride.component.html',
  styleUrls: ['./past-ride.component.css']
})
export class PastRideComponent implements OnInit {

  constructor(private pastr:OfferrideService ) { }
  public pastridedata:any;
  ngOnInit() {
    this.pastr.getpast1().subscribe((data)=>{this.pastridedata=data;console.log("Fetching"+ this.pastridedata+"and data"+data)})
  }
myId = localStorage.getItem("id");
public repdata:any
  pastRide(myId)
  {
   
   console.log('myid is'+myId+this.pastridedata[0].source);
    this.pastr.getpast1().subscribe((data)=>this.pastridedata=data)
   }
}
