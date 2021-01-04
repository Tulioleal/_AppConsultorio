//Angular
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//Services
import { PacienteService } from '../../../services/paciente.service'
import { AuthService } from '../.././../services/auth.service'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  clearAll(){
    this.pacienteService.clearForm()
  }

  logOutUser(){
    this.authService.logOut()
    this.router.navigate(['/auth/signin'])
  }
}
