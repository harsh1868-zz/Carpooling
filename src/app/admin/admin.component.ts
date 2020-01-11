import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
var adlog:any=0;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public lg:LoginService,private router:Router) { }

  ngOnInit() {

  }
adminlogin(user)
{
  console.log("Admin login"+user.name)
  if(user.name =="admin" && user.password=="admin123")
    {
      localStorage.setItem("admin",user.name);
      this.router.navigate(['/adminpage']);
   //  this.lg.adminp();
    }

}
}
