import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn():boolean{
    //on the basis of logic, u will return true or false
    return false;
  }

  checkUser(user):boolean{
    if(user.name=="naresh" && user.pwd == "xyz"){
      localStorage.setItem('username','naresh');
      return true;
    }
    else{
      return false;
    }

  }
  logout(){
    localStorage.clear();
  }


}
