import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';

@Component({
  selector: 'app-findride',
  templateUrl: './findride.component.html',
  styleUrls: ['./findride.component.css']
})
export class FindrideComponent implements OnInit {


  constructor(private servicedata:OfferrideService) { }

  ngOnInit() {
  }

  offer(data)
  {

    this.servicedata.offerRide(data);
  }

  
  
}
