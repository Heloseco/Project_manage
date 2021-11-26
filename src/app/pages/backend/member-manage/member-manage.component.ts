import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.css']
})
export class MemberManageComponent implements OnInit {
  info:any[]=[];
  constructor(
    private router: ActivatedRoute,
    private http:HttpClientModule,
    private userService: UserServiceService
    ){

    }

  ngOnInit(): void {
    this.userService.getmember().subscribe(
      (response) => {
        console.log(response.data);
        this.info = response.data;
        // this.info.push(data);
        // console.log(this.info[0].data);
        // for(let i=0;i<=this.info[0].data.lenght;i++) {
        // this.arr.push(typeof(this.info[0].data[i]))};
        // console.log(this.arr);
        }
  )
}


}


