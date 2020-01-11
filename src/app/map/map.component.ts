import { Component, OnInit } from '@angular/core';
import { OfferrideService } from '../service/offerride.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private servicedata:OfferrideService) { }

  ngOnInit() {
  }

  offer(data)
  {
   var obj =
    {
        source:data.source,
        destination:data.destination,
        fare:data.fare,
        date:data.date,
        driverid:localStorage.getItem("id")
    }
    this.servicedata.offerRide(obj);
    
  }

  

}


