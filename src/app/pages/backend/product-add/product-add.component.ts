import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from './../../../services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 
  forms: FormGroup = new FormGroup({
    product_name: new FormControl(''),
    product_price : new FormControl(''),
    product_amount : new FormControl(''),
    product_detail : new FormControl(''),
    product_image : new FormControl(''),
    product_weight : new FormControl(''),
    cate_id : new FormControl(''),
    u_id : new FormControl('')
  });

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
      product_image : ['', Validators.required],
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
      this.productservice.addproduct(this.forms.value).subscribe((results)=>
      {
      console.log(results)
    })
    }
    console.log(JSON.stringify(this.forms.value, null,2));
  }
//------------------------------------------------------------

}
