import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';


declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ru:RegisterService) { }

  ngOnInit() {
    $(document).ready(function(){
      $(function(){
        var div = $("form");
       div.animate({width: '500px', opacity: '0.4'}, "slow");
    
        div.animate({height: '500px', opacity: '0.4'}, "medium");
        div.animate({width: '800px', opacity: '0.8'}, "fast");
        div.animate({height: '300px', opacity: '0.4'}, "fast");
       div.animate({width: '500px', opacity: '0.8'}, "medium")
       div.animate({height: '600px', opacity: '1'}, "slow");
      });
    });
  }

  registeruser(user)
  {
    this.ru.adddata(user);
    
  }

}
