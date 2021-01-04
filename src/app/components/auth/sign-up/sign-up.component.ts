import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  password1: string
  password2: string
  isValid: boolean

  ngOnInit(): void {
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

  private openSnackBar(message:string) {
    this.snackbar.open( message , 'Cerrar' , {
      duration: 2000
    })
  }

}
