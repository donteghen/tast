import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(private authService:AuthService, private loc: Location) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      userName : new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  get userName(){
    return this.form.get('userName');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  submit(form){
    if(form.valid){
      console.log(form.value);
      this.authService.isAuthenticated = true;
      this.loc.back()
    }
  }

}
