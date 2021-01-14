import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  message:string
  eCode:number

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentMessage.subscribe(message => this.message = message)
    this.authService.currentErrorCode.subscribe(eCode => this.eCode = eCode)
  }

}
