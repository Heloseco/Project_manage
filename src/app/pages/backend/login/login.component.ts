import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ UserServiceService } from '../../../services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password:any;


  constructor(
    private http: HttpClient,
    private router:Router,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    this.userService.getmember().subscribe((result) => {
      console.log(result);
    })
  }

  Login(){
    let json= {email: this.email, password: this.password};
    this.http.post('http://localhost:3030/member/login', json)
      .subscribe(response => {
        console.log('Success');
        this.router.navigateByUrl('backend/member');
      },error =>{
        console.log(error);
        document.getElementById('log_message')!.textContent = "email/password is incorrect please re-enter";
        document.getElementById('log_message')!.setAttribute("style","color :red");
      });

  }

}
