import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {

  info:any[]=[];
  showSelect = true;
  showUpdate = true;

  constructor(private router: ActivatedRoute,
    private http:HttpClientModule,
    private productservice: ProductService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.productservice.getproduct().subscribe((response) => {
      this.info = response.data;
    })
  }

  
ShowRe(){
  if(this.showSelect==true)
  {
  this.showSelect = false;
  }else{this.showSelect = true;}
}


ShowID(idx:any){
    this.route.navigate(['backend/product',idx])
}

change(id:any,stat:any){
  
  let status = {product_status:stat};
  console.log(status,id);
  this.productservice.change(id,status).subscribe(()=>{
    console.log('hi');

    location.reload();
  })
}
}









// if(this.showUpdate==false)
  // {
  // this.showUpdate = true;
  // }
  // else
  // {
  //   this.showUpdate = false;
  //   this.productservice.getproductByid($event).subscribe((results)=>{
  //     this.productservice.id = $event;
  //     this.editdata = results;
  //     console.log(this.editdata);
  //   })
  //   ;
  // }
// 