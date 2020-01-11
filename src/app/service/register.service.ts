import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }


  adddata(user)
  {
    this.http.post('http://localhost:7762/Data/create',user).subscribe(res=>{console.log(res)});
   this.router.navigate(['/home']);
 
  }
}
 