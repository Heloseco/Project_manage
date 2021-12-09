import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-cate-update',
  templateUrl: './cate-update.component.html',
  styleUrls: ['./cate-update.component.css']
})
export class CateUpdateComponent implements OnInit {


  form: FormGroup = new FormGroup({
    cate_name: new FormControl(''),
    cate_detail : new FormControl('')
  });

  submitted = false;
  cate:any;
  id:string ="";

  constructor(
    private formbuilder: FormBuilder,
    private cateservice: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')as string;
    this.cateservice.getcategoryByid(this.id).subscribe((result)=>{console
          this.cate = result.category;
    });

    this.form = this.formbuilder.group({
      cate_name: ['', Validators.required],
      cate_detail : ['', Validators.required]
    });
  }

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }

  OnSubmit(): void {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }else{
      this.cateservice.editcategory(this.form.value,this.id).subscribe((result) => {
        console.log(result);
        this.router.navigateByUrl('backend/category')
      })
    }
  }
}
