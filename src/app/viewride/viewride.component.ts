import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-viewride',
  templateUrl: './viewride.component.html',
  styleUrls: ['./viewride.component.css']
})
export class ViewrideComponent implements OnInit {

  constructor(private viewride:LoginService) { }
  public ridedata:any;

  ngOnInit() {
    this.viewride.viewRide().subscribe((data)=>{this.ridedata=data;console.log("Fetching")})
  
  }

}
