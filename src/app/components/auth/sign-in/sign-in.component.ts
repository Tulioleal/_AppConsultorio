import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  signInUser(form: NgForm){
    this.authService.signIn(form.value).subscribe(
      res => {
        localStorage.setItem('refreshToken', res.refreshToken)
        this.router.navigate(['/pacientes'])
      },
      err => {
        console.log(err)
      }
    )
  }

}
