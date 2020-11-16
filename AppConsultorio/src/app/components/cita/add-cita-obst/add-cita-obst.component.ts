import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { strict } from 'assert';

//SERVICE
import { CitaObstService } from '../../../services/cita-obst.service'

@Component({
  selector: 'app-add-cita-obst',
  templateUrl: './add-cita-obst.component.html',
  styleUrls: ['./add-cita-obst.component.scss']
})
export class AddCitaObstComponent implements OnInit {

  constructor(
    public citaObstService: CitaObstService,
    private snackbar : MatSnackBar

  ) { }

  ngOnInit(): void {
    this.getCitas(this.pacienteId)
  }

  pacienteId : string = this.citaObstService.selectedCitaObst.pacienteId
  fechaTime : number
  fechaAnio : number

  numeroCita : number
  meses: number
  semanas: number
  dias: number
  conDias: number
  fProbable : string

  addCitaObst( form : NgForm ){
    this.citaObstService.createCitaObst(form.value).subscribe(
      res =>{
        console.log(res)
        this.openSnakbar()
      },
      err =>{
        console.log(err)
      }
    )
  }

  getCitas( pacienteId : string){
    this.citaObstService.getCitasObst(pacienteId).subscribe(
      res => {
        this.citaObstService.citasObst = res
        this.getNumeroCita()
      }
    )
  }

  getNumeroCita(){
    this.numeroCita = this.citaObstService.citasObst.length + 1
    this.citaObstService.selectedCitaObst.visita = this.numeroCita
  }

  compararFechas(){
    this.defVar()
    let dif : number = this.citaObstService.date - this.fechaTime

    this.meses = Math.floor(dif / 2629800000)
    this.conDias = Math.floor((dif % 2629800000) / 86400000 )
    this.semanas = Math.floor(dif / 604800000 )
    this.dias = Math.floor(dif / 86400000 )
    this.fProbable = stringify(new Date(this.fechaTime + 23668200000))
    this.fProbable = this.fProbable.slice(0,15)
  }

  defVar(){
    this.fechaAnio = parseInt(this.citaObstService.selectedCitaObst.fechaEmb.toString().slice(11,15))
    this.fechaTime = Date.parse(this.citaObstService.selectedCitaObst.fechaEmb)
  }

  openSnakbar(){
    this.snackbar.open('Cita Created','Cerrar', {
      duration: 2000
    })
  }
}
