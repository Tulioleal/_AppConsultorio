import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PacienteService } from './services/paciente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public authService: AuthService,
    private router: Router,
    public pacienteService: PacienteService
  ) { }

  clearAll(){
    this.pacienteService.clearForm()
  }

  logOutUser(){
    this.authService.logOut()
    this.router.navigate(['/auth/signin'])
  }
}
