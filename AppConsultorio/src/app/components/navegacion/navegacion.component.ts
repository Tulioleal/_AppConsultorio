//Angular
import {Component, OnInit} from '@angular/core';

//Services
import { PacienteService } from '../../services/paciente.service'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(
    private pacienteService: PacienteService

  ) { }

  ngOnInit(): void {
  }

  clearAll(){
    this.pacienteService.clearForm()
  }
}
