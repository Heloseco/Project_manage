import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {
  img:any;
  base64:any;

  form: FormGroup = new FormGroup({
    product_name: new FormControl(''),
    product_price : new FormControl(''),
    product_amount: new FormControl(''),
    product_image: new FormControl(''),
    product_detail: new FormControl(''),
    product_weight: new FormControl(''),
    cate_id : new FormControl('')
  });

  submitted = false ;
  prod : any ; 
  id :string = "";

  constructor( private formBuilder: FormBuilder, 
    private productservice : ProductService,
    private route:ActivatedRoute,
    private router:Router
    ) {
      
    }


  ngOnInit(): void {
  
    this.id = this.route.snapshot.paramMap.get('id') as string; 
    this.productservice.getproductByid(this.id).subscribe((result) => {
      this.prod = result.product;
    });

    this.form = this.formBuilder.group(
      {
        product_name: ['', Validators.required],
        product_price: ['', Validators.required],
        product_amount: ['', Validators.required],
        product_image : ['', Validators.required],
        product_detail : ['', Validators.required],
        product_weight: ['', Validators.required],
        cate_id : ['', Validators.required],
      }
    );
  }

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }

  OnSubmit(): void {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    else {
      this.productservice.editproduct(this.form.value,this.id).subscribe((result) => {console.log(result)});
      console.log(this.form.value);
      this.router.navigateByUrl('backend/productmanage');
  }
}
OnChange($event:Event){
    
  let file = ($event.target as HTMLInputElement);
  let data:any = file;
  console.log(data.files[0]);
  let reader = new FileReader();
  reader.readAsDataURL(data.files[0]);
  reader.onload = this.handleChange.bind(this);
    // me.modelvalue = reader.result
    // this.data1 = reader.result;
    
  };
// console.log(this.data1);1q

  handleChange(readerevt:any){
    let binaryS = readerevt.target.result;
    this.base64 = binaryS;
    console.log(this.base64);
    this.form.patchValue({ product_image: this.base64});
    // localStorage.setItem('base64', this.base64);
    // console.log(typeof localStorage.getItem('base64'))
  }
}
