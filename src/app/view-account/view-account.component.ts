import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { AdminserviceService } from '../service/adminservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  constructor(private viewUser:LoginService,private ads:AdminserviceService,private router:Router) { }
public userdata:any;
  ngOnInit() {
      this.viewUser.viewUser().subscribe((data)=>{this.userdata=data;console.log("getting data")})
  
  }
DeleteUser(user)
{
  console.log("inside component" + user._id);
  this.ads.DeleteUsers(user);
}

UpdateUser(user)
{
  localStorage.setItem("uid",user._id);
  console.log("inside component" + user._id);
  this.router.navigate['/update'];
  //this.ads.UpdateUsers(user);
}
}
