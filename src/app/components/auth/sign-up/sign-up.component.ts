import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  password1:string
  password2:string
  isValid: boolean

  ngOnInit(): void {
  }

  signUpUser( form: NgForm ){
    this.authService.signUp(form.value).subscribe(
      res=> {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  compararPassword(){

    this.password1 = this.authService.selectedUserSignUp.password

    let comparacion:boolean = this.password1 == this.password2

    console.log(this.password1, this.password2, comparacion)

    if ( comparacion ) return this.isValid = true
    else return this.isValid = false

  }
}
