import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.css']
})
export class MemberManageComponent implements OnInit {
  info:any[]=[];
  showSelect = true;
  showUpdate = true;
  editdata:any;
  constructor(
    private router: ActivatedRoute,
    private http:HttpClientModule,
    private userService: UserServiceService,
    private route : Router
    ){
    }
  ngOnInit(): void {
    this.userService.getmember().subscribe(
      (response) => {
        this.info = response.data;
        // this.info.push(data);
        // console.log(this.info[0].data);
        // for(let i=0;i<=this.info[0].data.lenght;i++) {
        // this.arr.push(typeof(this.info[0].data[i]))};
        // console.log(this.arr);
        }
  )
}

ShowRe(){
  if(this.showSelect==true)
  {
  this.showSelect = false;
  }else{this.showSelect = true;}
}


ShowID(idx:any){
      this.route.navigate([`backend/member`,idx]);
    
    ;
  
}



}

