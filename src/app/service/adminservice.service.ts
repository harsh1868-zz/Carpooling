import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  DeleteUsers(user)
  {
    var obj={
      id : user._id
    }
    console.log("inside deleteo"+obj.id)
    this.http.delete('http://localhost:7762/deleteuser/'+obj.id).subscribe(res=>console.log(res));
  }

  updatedata(user)
  {
    var obj={
      id : user._id
    }
    console.log("inside updateo"+obj.id)
    this.http.get('http://localhost:7762/getupdate').subscribe(res=>console.log(res));
  }

  
}
