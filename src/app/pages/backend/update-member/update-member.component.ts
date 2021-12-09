import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname : new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  submitted = false;
  fake:any;
  email:any;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService,
    private route:ActivatedRoute,
    ) {
      
    }

  ngOnInit(): void {
    
    let id =  this.route.snapshot.paramMap.get('id');
    this.userService.getmemberByid(id).subscribe((results)=>{
        this.fake= results.user;
        this.form.setValue({
          email : this.fake.email,
          password: this.fake.password,
          fname: this.fake.fname,
          lname: this.fake.lname
        });
      });
    this.form = this.formBuilder.group(
      {
        
        email: [this.email,[Validators.required, Validators.email]],
        password : ["",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
        ],
        fname: ['', Validators.required],
        lname: ['', Validators.required],
      });
  }

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }

  onSubmit(): void {

    this.submitted = true;
  
    if(this.form.invalid){
      this.router.navigate(['/backend/member']);
      return;
    }else
    {
      // TODO NEED API
    }
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value, null,2));
  }

}
