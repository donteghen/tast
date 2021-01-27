import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
 form: FormGroup
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      isAdmin: new FormControl('', [Validators.required])
    });
  }

  get userName(){
    return this.form.get('userName');
  }
  get email(){
    return this.form.get('email');
  }
  get isAdmin(){
    return this.form.get('isAdmin');
  }

  update(form:FormGroup){
    if(form.valid){
     var neweUser = new User(null, form.value.userName, form.value.email, form.value.isAdmin);
     this.userService.saveUser(neweUser).subscribe(data =>{
       console.log(data);
       this.router.navigate(['/admin/users']);
     })
    }
  }

}
