import { Component, Inject ,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

//Services
import { CitaObstService } from '../../../../../services/cita-obst.service'
import { CitaGinecoService } from '../../../../../services/cita-gineco.service'

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {

  constructor(
    public citaGinecoService : CitaGinecoService,
    public citaObstService : CitaObstService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  citaGineco(id: string) {
    this.citaGinecoService.clearForm()
    this.citaGinecoService.selectedCitaGineco.pacienteId = id;
  }

  citaObst(id: string, gestas: number){
    this.citaObstService.clearForm()
    console.log(id)
    this.citaObstService.selectedCitaObst.pacienteId = id;
    this.citaObstService.selectedCitaObst.gestas = gestas
  }

}
