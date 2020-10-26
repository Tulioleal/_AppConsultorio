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

  constructor( private pacienteService: PacienteService ) { }

  ngOnInit(): void {
  }

  clearForm(){
    this.pacienteService.clearForm()
  }
}
