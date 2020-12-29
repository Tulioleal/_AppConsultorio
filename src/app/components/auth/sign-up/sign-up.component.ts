import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  password1: string
  password2: string
  isValid: boolean

  ngOnInit(): void {
  }

  signUpUser( form: NgForm ){
    this.authService.signUp(form.value).subscribe(
      res => {
        console.log('signup succesful')
        this.router.navigate(['auth/signin'])
      },
      err => {
        console.log(err)
      }
    )
  }

  compararPassword(){

    this.password1 = this.authService.selectedUserSignUp.password

    let comparacion: boolean = this.password1 == this.password2

    if ( comparacion ) return this.isValid = true
    else return this.isValid = false

  }
}
