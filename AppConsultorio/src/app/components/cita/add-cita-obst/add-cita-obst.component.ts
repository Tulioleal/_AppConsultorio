import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

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

  pesoAument: number
  numEmb : number
  fechaTime : number
  numeroCita : number
  meses: number
  semanas: number
  semDias: number
  dias: number
  conDias: number
  fProbable : string
  imc1 : number
  imc2 : number

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
    this.fechaTime = Date.parse(this.citaObstService.selectedCitaObst.ultMenst)
    let dif : number = this.citaObstService.date - this.fechaTime

    this.meses = Math.floor(dif / 2629800000)
    this.conDias = Math.floor((dif % 2629800000) / 86400000 )
    this.semanas = Math.floor(dif / 604800000 )
    this.semDias = Math.floor((dif % 604800000 ) / 86400000 )
    this.dias = Math.floor(dif / 86400000 )

    this.fProbable = new Date(this.fechaTime + 24192000000).toString()
    this.fProbable = this.fProbable.slice(0,15)
  }

  imc_1(pesoAntesEmb:number, talla:number){
    this.imc1 = Math.round(pesoAntesEmb / ((talla / 100) ** 2))
  }

  imc_2(pesoAntesEmb:number, talla:number){
    this.imc2 = Math.round(pesoAntesEmb / ((talla / 100) ** 2))
  }

  aumentoPeso(){
    let peso1 : number = this.citaObstService.selectedCitaObst.pesoAEmb
    let peso2 : number = this.citaObstService.selectedCitaObst.exGenPeso

    this.pesoAument = peso2 - peso1
  }

  openSnakbar(){
    this.snackbar.open('Cita Created','Cerrar', {
      duration: 2000
    })
  }
}
