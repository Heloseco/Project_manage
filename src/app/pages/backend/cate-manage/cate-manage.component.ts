import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-cate-manage',
  templateUrl: './cate-manage.component.html',
  styleUrls: ['./cate-manage.component.css']
})
export class CateManageComponent implements OnInit {

  info:any[]=[];
  showSelect = true;
  showUpdate = true;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClientModule,
    private categoryservice: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryservice.getcategory().subscribe(category => {
      this.info = category.data;
    })
  }

  ShowRe(){
    if(this.showSelect==true)
    {
    this.showSelect = false;
    }else{this.showSelect = true;}
  }
  
  ShowID($event:any){
  
    if(this.showUpdate==false)
    {
    this.showUpdate = true;
    }
    else
    {
      this.showUpdate = false;
    }
  }
}
  
