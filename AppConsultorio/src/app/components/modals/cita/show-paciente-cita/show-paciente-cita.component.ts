import { Component, OnInit } from '@angular/core';

import { CitaGinecoService } from '../../../../services/cita-gineco.service'
import { CitaObstService } from '../../../../services/cita-obst.service'

@Component({
  selector: 'app-show-paciente-cita',
  templateUrl: './show-paciente-cita.component.html',
  styleUrls: ['./show-paciente-cita.component.scss']
})
export class ShowPacienteCitaComponent implements OnInit {

  constructor(

    public ginecoService : CitaGinecoService,
    public obstService : CitaObstService,

  ) { }

  ngOnInit(): void {
    this.getCitas(this.pacienteIdG, this.pacienteIdO)
  }

  pacienteIdG : string = this.ginecoService.selectedCitaGineco.pacienteId
  pacienteIdO : string = this.obstService.selectedCitaObst.pacienteId

  getCitas(
    pacienteIdG: string = this.pacienteIdG,
    pacienteIdO: string = this.pacienteIdO
  ){
    this.ginecoService.getCitasGineco(pacienteIdG).subscribe(
      res =>{
        this.ginecoService.citasGineco = res
      },
      err => { console.log(err)}
    )
    this.obstService.getCitasObst(pacienteIdO).subscribe(
      res => {
        this.obstService.citasObst = res
      },
      err => console.log(err)
    )
  }

}
