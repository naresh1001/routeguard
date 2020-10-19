import { Component, OnInit } from '@angular/core';
 import{ UserService }   from '../user.service';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  user = {
    name:'',
    pwd:''
  }
  msg;
  loginHere(myform){
    this.user=myform;
    let result = this.userService.checkUser(this.user);
    if(result==true){
      this.router.navigate(['dashboard']);
    }
    else{
      this.msg='Invalid username or password'; 
    }
   }
 
}
