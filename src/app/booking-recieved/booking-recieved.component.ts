import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';

@Component({
  selector: 'app-booking-recieved',
  templateUrl: './booking-recieved.component.html',
  styleUrls: ['./booking-recieved.component.css']
})
export class BookingRecievedComponent implements OnInit {

  constructor(private pastr:OfferrideService ) { }
public bookingonyou :any;

  ngOnInit() {
    this.pastr.getbookingbyother().subscribe((data)=>{this.bookingonyou=data;console.log("Fetching"+ this.bookingonyou+"and data"+data)})
 
  }

}
