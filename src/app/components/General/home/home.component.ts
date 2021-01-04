import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  state: string = 'home'
  password1: string
  password2: string
  isValid: boolean

  constructor(
    public authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signInUser(form: NgForm){
    this.authService.signIn(form.value).subscribe(
      res => {
        localStorage.setItem('refreshToken', res.refreshToken)
        this.openSnackBar(`Welcome`)
        this.router.navigate(['/pacientes'])
      },
      err => {
        console.log(err)
        this.openSnackBar('Email or Password invalid')
      }
    )
  }

  signUpUser( form: NgForm ){

    if ( this.compararPassword() ) {

      this.authService.signUp(form.value).subscribe(
        res => {
          this.openSnackBar('User successfully created')
          this.router.navigate(['auth/signin'])
        },
        err => {
          console.log(err)
          this.openSnackBar('Email or Username is already in use')
        }
      )
      return

    } else {
      this.openSnackBar('The password do not match')
      return
    }
  }

  private compararPassword(){

    this.password1 = this.authService.selectedUserSignUp.password
    let comparacion: boolean = this.password1 == this.password2

    if(comparacion) {
      return true
    }else{
      return false
    }
  }

  changeState( newState: string ){
    this.state = newState
  }

  private openSnackBar(message:string) {
    this.snackbar.open( message , 'Cerrar' , {
      duration: 2000
    })
  }

}
