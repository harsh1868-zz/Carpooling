import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public authListener = new Subject<boolean>();
  public uname:String;
  public username:any;
  public flag:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }



  // verify1(user)
  // {
  //   this.http.post('http://localhost:7762/Data/login',user).subscribe(res=>{console.log(res)})

  // }

  getUserforu()
  {

    return this.http.get('http://localhost:7762/getuforupdate/'+localStorage.getItem("uid"))

  }
  adminp()
  {
    this.router.navigate['/adminpage'];
  }
  getUser()
  {
   return  this.http.get('http://localhost:7762/count')

  }
  getallRide()
  {
   return  this.http.get('http://localhost:7762/ridecount')

  }

  viewUser()
  {
    return  this.http.get('http://localhost:7762/viewAccount');
  }

  viewRide()

  {
    return this.http.get('http://localhost:7762/viewRide')
  }
  validate(user)
  {
    this.http.post('http://localhost:7762/loginverify',user).subscribe(res=>{console.log(res);
    var data=JSON.stringify(res);
    console.log(data);
    var stat=JSON.parse(data);
    if(stat.status!="fail"){

      this.uname=stat.user;
      this.username=stat.svar;
      console.log(this.uname);
      console.log("in Service file session variable is"+ stat.svar)
     localStorage.setItem("name",stat.user);
     localStorage.setItem("id",stat.fullobject._id);
     console.log("localstorage item"+localStorage.getItem("name") + localStorage.getItem("id"));
    var users=this.uname;
    this.router.navigate(['/home']);
  }
  else
  {
    alert('Enter valid username and password');
  }
});


  }

  getUsername()
  {
    return this.username;

  }

}