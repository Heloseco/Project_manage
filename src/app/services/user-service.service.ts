import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url="http://localhost:3030/member";

  constructor(private http:HttpClient) { }

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

}
