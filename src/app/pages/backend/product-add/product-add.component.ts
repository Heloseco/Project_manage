import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from './../../../services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  
})
export class ProductAddComponent implements OnInit {
    img:any;
    base64:string="";

  forms: FormGroup = new FormGroup({
    product_name: new FormControl(''),
    product_price : new FormControl(''),
    product_amount : new FormControl(''),
    product_detail : new FormControl(''),
    product_image : new FormControl(''),
    product_weight : new FormControl(''),
    cate_id : new FormControl(''),
    u_id : new FormControl('')
  })
  forms1 = {
      product_name :'',
      product_price :'',
      product_amount :'',
      product_detail: '',
      product_image :'',
      product_weight: '',
      cate_id : '',
      u_id : '',
    }
  ;

  submitted = false;

  constructor(
    private formBuilder :  FormBuilder,
    private productservice : ProductService,
    private http : HttpClient,
    private router : Router
  ) {}

  ngOnInit(): void {
    
    this.forms = this.formBuilder.group({
      product_name : ['', Validators.required],
      product_price : ['', Validators.required],
      product_amount : ['', Validators.required],
      product_detail : ['', Validators.required],
      product_image : [this.base64],
      product_weight : ['', Validators.required],
      cate_id : ['', Validators.required],
      u_id : ['', Validators.required],
    })
  }

  //Change form.control to 'f' for easier call

  get f():{[key: string]: AbstractControl}{
    return this.forms.controls;
  }

  OnSubmit(): void {
    this.submitted = true;

    if(this.forms.invalid){
      return
    }else
    {
      this.forms1 = this.forms.value;
      this.productservice.addproduct(this.forms1).subscribe((results)=>
      {
        location.reload();
      console.log(results)
    })
    }
    console.log(JSON.stringify(this.forms.value, null,2));
  }
//------------------------------------------------------------

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
      this.forms.patchValue({ product_image: this.base64});
      // localStorage.setItem('base64', this.base64);
      // console.log(typeof localStorage.getItem('base64'))
    }
  }

//     getBase64($event : Event) {
//     let me = this;
//     let file = $event.currentTarget.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       //me.modelvalue = reader.result;
//       console.log(reader.result);
//     };
// }

