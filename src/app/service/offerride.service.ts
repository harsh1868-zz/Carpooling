import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import  {ur } from './../db/RideRecord';
@Injectable({
  providedIn: 'root'
})
export class OfferrideService {

  constructor(private http:HttpClient,private router:Router) { }

  offerRide(user)
  {
    this.http.post('http://localhost:7762/Data/postride',user).subscribe(res=>{console.log(res)});
    this.router.navigate(['/home']);
  }
  getRide()
  {
    return this.http.get('http://localhost:7762/liveride');
  }
  getpast1()
  {
    //console.log("Requested object"+user);
   var  userid = localStorage.getItem("id");
    return   this.http.post('http://localhost:7762/getpastRide/'+userid,{userid})
//     console.log() .subscribe(res=>console.log("In service file"+res));
  }
  getFamouseRide()
  {
    return this.http.get('http://localhost:7762/famouseride');
  }


    getbookingbyother()
    {
    
      var  userid = localStorage.getItem("id");
      return   this.http.post('http://localhost:7762/getRidebyotheronyou/'+userid,{userid})
  
    }
}
