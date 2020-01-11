import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

declare var $:any;
var famouse:number=0;
var username:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logindata:LoginService) { }

  ngOnInit() {
    username = this.logindata.username;
    $(function(){
      var div = $("form");
     div.animate({width: '500px', opacity: '0.4'}, "slow");
  
      div.animate({height: '500px', opacity: '0.4'}, "medium");
      div.animate({width: '800px', opacity: '0.8'}, "fast");
      div.animate({height: '300px', opacity: '0.4'}, "fast");
     div.animate({width: '500px', opacity: '0.8'}, "medium")
     div.animate({height: '600px', opacity: '1'}, "slow");
    });
  }
Login(user)
{

  this.logindata.validate(user);
  
 //this.logindata.verify1(user);
}
}

