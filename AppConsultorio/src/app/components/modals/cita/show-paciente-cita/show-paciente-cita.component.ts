import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';

import { CitaGinecoService } from '../../../../services/cita-gineco.service'
import { CitaObstService } from '../../../../services/cita-obst.service'

@Component({
  selector: 'app-show-paciente-cita',
  templateUrl: './show-paciente-cita.component.html',
  styleUrls: ['./show-paciente-cita.component.scss']
})
export class ShowPacienteCitaComponent implements OnInit {

  constructor(

    public pacienteService : PacienteService,
    public ginecoService : CitaGinecoService,
    public obstService : CitaObstService,

  ) { }

  ngOnInit(): void {
    this.getCitas( this.pacienteId )
  }

  pacienteId : string = this.pacienteService.selectedPaciente._id

  getCitas(
    pacienteId: string = this.pacienteId
  ){
    this.ginecoService.getCitasGineco(pacienteId).subscribe(
      res =>{
        this.ginecoService.citasGineco = res
      },
      err => { console.log(err)}
    )
    this.obstService.getCitasObst(pacienteId).subscribe(
      res => {
        this.obstService.citasObst = res
      },
      err => console.log(err)
    )
  }

}
