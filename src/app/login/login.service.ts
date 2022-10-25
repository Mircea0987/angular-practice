import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {




  isLoggedIn:boolean = false

  Login(email:string, password:string){
    if(email === "admin@gmail.com" && password === "admin"){
      this.isLoggedIn == true
      alert("Login Succes!")
      this.router.navigate(['/main'])

    }
    return this.isLoggedIn
  }

  constructor(private router:Router) { }
}
