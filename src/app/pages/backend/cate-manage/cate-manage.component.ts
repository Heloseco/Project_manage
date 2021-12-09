import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private categoryservice: CategoryService,
    private route: Router
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
  
  ShowID(idx:any){
    
    this.route.navigate(['backend/category',idx])
  }
}
  
