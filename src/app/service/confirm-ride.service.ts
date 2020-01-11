import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ur} from './../../app/db/user.models';
@Injectable({
  providedIn: 'root'
})
export class ConfirmRideService {

  constructor(private http:HttpClient) { }


  confirm(user:ur)
  {
    console.log(user);
//Change this line for user
      var obj={
        userid:localStorage.getItem("id"),
        rideid:user._id,
        fare:user.fare,
        driverid:user.driverid
      }
      console.log("object will be"+obj.userid +"and " + obj.rideid)
//        this.http.post('http://localhost:7762/Confirmrecord/'+user._id,{user}).subscribe(res=>{user});
    this.http.post('http://localhost:7762/Confirmrecord1',obj).subscribe(res=>{user});
   // console.log("Id inside request is "+localStorage.getItem("id"))
    // this.router.navigate(['/home']); 
  }

  

}
