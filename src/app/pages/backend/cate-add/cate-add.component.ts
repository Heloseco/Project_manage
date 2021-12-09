import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from './../../../services/category.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    cate_name : new FormControl(''),
    cate_detail : new FormControl('')
  });

  submitted = false; 

  constructor(
    private formsBuilder : FormBuilder,
    private categoryservice: CategoryService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.form = this.formsBuilder.group({

      cate_name : ['', Validators.required],
      cate_detail : ['', Validators.required],

    })
  }
  //Change form.control to 'f' for easier call

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }


  OnSubmit(): void {
    this.submitted = true;

    if(this.form.invalid){
      return
    }else
    {
      this.categoryservice.addcategory(this.form.value).subscribe((results)=>
      {
      console.log(results);
      location.reload();
    })
    }
    console.log(JSON.stringify(this.form.value, null,2));
  }
}
