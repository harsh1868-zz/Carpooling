import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { AdminserviceService } from '../service/adminservice.service';
var user:any
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private viewUser:LoginService,private adu:AdminserviceService) { }
public userdata:any;
public edata ={
  name:"",
  email:"",
  mobileno:""
}

  ngOnInit() {
  //  this.viewUser.getUserforu();

  this.viewUser.getUserforu().subscribe((data)=>{this.userdata=data;console.log("Fetching"+this.userdata)})
  
    // .subscribe((data)=>{this.userdata=data;console.log("Fetching"+this.userdata)})
  
  
  } 
  updateuser(user)
  {
    console.log("atupdate.compo.ts"+user.name)
    this.adu.updatedata(user);
    
  }

}
