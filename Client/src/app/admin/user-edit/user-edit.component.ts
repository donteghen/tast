import { Review } from './../../../models/reviews';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
user = new User();
form:FormGroup;

/* userReview from user services*/
userReviews : Review[];

  constructor(private userService: UserService, private activeRoute:ActivatedRoute, private router:Router, private reviewService:ReviewService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param =>{
      var id = param.id;
      this.userService.getUser(id).subscribe(data =>{
        Object.assign(this.user, data);
        console.log(this.user);
        this.reviewService.getReviews().subscribe(data =>{
          this.userReviews = data.filter(review => review.reviewer._id == this.user._id);
        });
        this.form = new FormGroup({
          userName: new FormControl(this.user.userName, [Validators.required]),
          email: new FormControl(this.user.email, [Validators.required]),
          isAdmin: new FormControl(this.user.isAdmin, [Validators.required])
        })
      });
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
     var updateUser = new User(this.user._id, form.value.userName, form.value.email, form.value.isAdmin);
     this.userService.updateUser(updateUser).subscribe(data =>{
       console.log(data);
       this.router.navigate(['/admin/users']);
     })
    }
  }
}
