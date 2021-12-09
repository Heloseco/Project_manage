import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthService,private router: Router){}
  canActivate():boolean{
      if(this.authService.logged()){
        return true;
      }else{
        this.router.navigate(["login"]);
        return false;
      }
  
  }

  canActivateChild():boolean{
    if(this.authService.logged()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  }
}
