import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  url="http://localhost:3030/member";

  constructor(private http:HttpClient,private router: Router) { }

  getmember()
  {
    return this.http.get<{data:any}>(`${this.url}/getmember`);
  };

  getmemberByid(id:any)
  {
    return this.http.get<{user:any}>(`${this.url}/getmember/${id}`);
  };

  addmember(data:any)
  {
    return this.http.post(`${this.url}/addmember`,data);
  }

  resign(id:any,status:any){
    return this.http.put(`${this.url}/changestatus/${id}`,status)
  }
}
