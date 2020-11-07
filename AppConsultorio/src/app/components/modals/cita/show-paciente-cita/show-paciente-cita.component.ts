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
    this.getCitas()
  }

  getCitas(){
    this.ginecoService.getCitasGineco().subscribe(
      res =>{
        this.ginecoService.citasGineco = res
      },
      err => { console.log(err)}
    )
    this.obstService.getCitasObst().subscribe(
      res => {
        this.obstService.citasObst = res
      },
      err => console.log(err)
    )
  }

}
