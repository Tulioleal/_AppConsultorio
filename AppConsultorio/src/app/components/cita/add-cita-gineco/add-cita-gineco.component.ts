import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';

//SERIVICE
import { CitaGinecoService } from '../../../services/cita-gineco.service'

@Component({
  selector: 'app-add-cita-gineco',
  templateUrl: './add-cita-gineco.component.html',
  styleUrls: ['./add-cita-gineco.component.scss']
})
export class AddCitaGinecoComponent implements OnInit {

  constructor(
    public citaGinecoService : CitaGinecoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCitas(this.pacienteId)
  }

  pacienteId : string = this.citaGinecoService.selectedCitaGineco.pacienteId
  numeroCita : number

  addCitaGineco( form : NgForm ){
    this.citaGinecoService.createCitaGineco(form.value).subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => {
        console.log(err)
      }
    )
  }

  private getCitas(pacienteId : string){
    this.citaGinecoService.getCitasGineco(pacienteId).subscribe(
      res=>{
        this.citaGinecoService.citasGineco = res
        this.getNumeroCita()
      }
    )
  }

  private getNumeroCita(){
    this.numeroCita = this.citaGinecoService.citasGineco.length + 1
    this.citaGinecoService.selectedCitaGineco.visita = this.numeroCita
  }

  openSnackBar() {
    this.snackbar.open('Cita Created', 'Cerrar', {
      duration: 2000
    })
  }
}
