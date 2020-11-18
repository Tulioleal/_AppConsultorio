import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PacienteService } from 'src/app/services/paciente.service';

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
    public pacienteService : PacienteService,
    private snackbar : MatSnackBar

  ) { }

  ngOnInit(): void {
    this.getCitas(this.pacienteId, this.gestas)
    this.getPaciente(this.pacienteId)
  }

  pacienteId : string = this.citaObstService.selectedCitaObst.pacienteId
  gestas: number = this.citaObstService.selectedCitaObst.gestas


  pesoAument: number
  numEmb : number
  numeroCita : number
  meses: number
  semanas: number
  semDias: number
  dias: number
  conDias: number
  fProbable : Date
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

  getCitas( pacienteId : string, gestas : number){
    this.citaObstService.getCitasGes(pacienteId, gestas).subscribe(
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

  getPaciente(id: string){
    this.pacienteService.getpaciente(id)
  }

  compararFechas(){
    let fechaTime = Date.parse(this.citaObstService.selectedCitaObst.ultMenst)
    let dif : number = this.citaObstService.date - fechaTime

    this.meses = Math.floor(dif / 2629800000)
    this.conDias = Math.floor((dif % 2629800000) / 86400000 )
    this.semanas = Math.floor(dif / 604800000 )
    this.semDias = Math.floor((dif % 604800000 ) / 86400000 )
    this.dias = Math.floor(dif / 86400000 )

    this.fechaProbable()
  }

  fechaProbable(){
    this.citaObstService.fechaProbable()
    this.fProbable = this.citaObstService.fProbable
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
