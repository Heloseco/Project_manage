import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import{ UserServiceService } from '../../../services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password:any;
  info:any[]=[];

  constructor(
    private http: HttpClient,
    private router:Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    // this.userService.getmember().subscribe((result) => {
    //   console.log(result);
    // })
  }

  Login(){
    let json= {email: this.email, password: this.password};
    
    if(json){
      this.authService.login(json).subscribe((res)=>{
        console.log(res);
        let data:any =res;
        sessionStorage.setItem('token', data.access_token);
        this.router.navigateByUrl('backend/member');
      })
    }
    if(!localStorage.getItem('token'))
    {
        document.getElementById('log_message')!.textContent = "email/password is incorrect please re-enter";
        document.getElementById('log_message')!.setAttribute("style","color :red");
    }
    // this.http.post('http://localhost:3030/member/login', json)
    //   .subscribe(response => {
    //     console.log('Success');
    //     const data:any = response;
    //     console.log(data);
    //     sessionStorage.setItem('token', data.access_token);
        // localStorage.setItem('token', data.access_token);
        // this.router.navigateByUrl('backend/member');


      // },error =>{
      //   console.log(error);
      //   document.getElementById('log_message')!.textContent = "email/password is incorrect please re-enter";
      //   document.getElementById('log_message')!.setAttribute("style","color :red");
      // });

  }
  // postLogin(){
  //   let json= {email: this.email, password: this.password};
  //   const res = axios.
  // }
}
