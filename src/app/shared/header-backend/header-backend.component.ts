import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-backend',
  templateUrl: './header-backend.component.html',
  styleUrls: ['./header-backend.component.css']
})
export class HeaderBackendComponent implements OnInit {

    showSelect = true;
  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('token')){
      this.showSelect = false;
    }else{
      this.showSelect = true;
    }
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }


}
