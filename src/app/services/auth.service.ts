import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3030/member';
  auth:boolean = false;
  constructor(private http: HttpClient, ) { }

  login(json:any){
    return this.http.post('http://localhost:3030/member/login', json);
  }

  getProfile()
  {
    return this.http.get<{data:any}>(`${this.url}/getmember`);
  };

  logged(){
    if(sessionStorage.getItem('token')!.length == 180){
      this.auth = true;
    }
    return this.auth;
  }
}

