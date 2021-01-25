import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User[];
userView:User[];
rating:number=3;
collection:number;
page:number=1;
pageSize:number=2;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users[0].isAdmin)
      this.collection = data.length;
      this.userView = this.users.slice((this.page-1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize );
    });
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(()=>{
      console.log("succeffuly deleted")
    });
    this.getUsers();
  }
  pageChange(p:number){
    this.userView = this.users.slice((p-1) * this.pageSize, (p - 1) * this.pageSize + this.pageSize )
  }
}
