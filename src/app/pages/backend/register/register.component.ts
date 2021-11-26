import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup = new FormGroup({
      fname: new FormControl(''),
      lame : new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    });
    submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
    ){ }

  //Validators

  ngOnInit(): void {
    this.form = this.formBuilder.group(
    {
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password : ["",
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
      ],
      role: ['', Validators.required]
    });
    
  }
// ----------------------------------------------------------

//Change form.control to 'f' for easier call

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }

//------------------------------------------------------------

//Function onSubmit

onSubmit(): void {

  this.submitted = true;

  if(this.form.invalid){
    return;
  }else
  {
    
  }

  console.log(JSON.stringify(this.form.value, null,2));
}
}
