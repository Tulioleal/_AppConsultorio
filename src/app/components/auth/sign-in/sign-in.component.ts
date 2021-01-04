import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.authService.clearForms()
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

  private openSnackBar(message:string) {
    this.snackbar.open( message , 'Cerrar' , {
      duration: 2000
    })
  }

}
