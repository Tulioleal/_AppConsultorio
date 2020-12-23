import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Signin } from '../models/sign-in'
import { Signup } from '../models/sign-up'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = 'api/auth'

  selectedUserSignIn : Signin = {
    email: "",
    password: ""
  }

  selectedUserSignUp : Signup = {
    username: "",
    email: "",
    password: ""
  }

  userSignIn: Signin
  userSignUp: Signup

  constructor( private http: HttpClient ) { }

  signIn( user: Signin ){

    return this.http.post(this.URL_API + "/signin", user)
  }

  signUp( user: Signup ){

    return this.http.post(this.URL_API + "/signup", user)
  }

}
