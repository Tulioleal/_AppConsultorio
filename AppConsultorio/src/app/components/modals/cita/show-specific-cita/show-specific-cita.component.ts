import { Component, Inject, OnInit, } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitaGinecoService } from 'src/app/services/cita-gineco.service';
import { CitaObstService } from 'src/app/services/cita-obst.service';

@Component({
  selector: 'app-show-specific-cita',
  templateUrl: './show-specific-cita.component.html',
  styleUrls: ['./show-specific-cita.component.scss']
})
export class ShowSpecificCitaComponent implements OnInit {

  meses: number;
  semanas: number;
  conDias: number;
  semDias: number;
  dias: number;
  fechaProbable : Date

  constructor(
    public ginecoService : CitaGinecoService,
    public obstService : CitaObstService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.fProbable()
    this.compararFechas()
  }

  compararFechas(){
    let fechaTime = Date.parse(this.obstService.selectedCitaObst.ultMenst)
    let dif : number = this.obstService.date - fechaTime

    this.meses = Math.floor(dif / 2629800000)
    this.conDias = Math.floor((dif % 2629800000) / 86400000 )
    this.semanas = Math.floor(dif / 604800000 )
    this.semDias = Math.floor((dif % 604800000 ) / 86400000 )
    this.dias = Math.floor(dif / 86400000 )
  }

  fProbable(){
    this.obstService.fechaProbable()
    this.fechaProbable = this.obstService.fProbable
  }


}
