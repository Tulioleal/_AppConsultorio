//Angular
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

//Paciente model
import { Paciente } from '../../models/paciente'

//Services
import { PacienteService } from '../../services/paciente.service'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  myControl = new FormControl();
  pacientes: Paciente[]
  nombres: string[]

  constructor( private pacienteService: PacienteService ) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  clearForm(){
    this.pacienteService.clearForm()
  }

  getPacientes(){
    this.pacienteService.getPacientes()
    .subscribe(
      res => {
        this.pacientes = res
        console.log(this.pacientes)
      },
      err => console.log(err)
    )
  }

}
