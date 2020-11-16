//Angular
import {Component, OnInit} from '@angular/core';

//Services
import { PacienteService } from '../../services/paciente.service'
import { CitaGinecoService } from '../../services/cita-gineco.service'
import { CitaObstService } from '../../services/cita-obst.service'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(
    private pacienteService: PacienteService,
    private citaGinecoService: CitaGinecoService,
    private citaObstService: CitaObstService

  ) { }

  ngOnInit(): void {
  }

  clearAll(){
    this.pacienteService.clearForm()
  }
}
