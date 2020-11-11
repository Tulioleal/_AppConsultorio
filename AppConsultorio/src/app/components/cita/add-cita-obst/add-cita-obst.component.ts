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
  numeroCita : number

  addCitaObst( form : NgForm ){
    this.citaObstService.createCitaObst(form.value).subscribe(
      res =>{
        console.log(res)
        this.openSnakbar()
      }
    )
  }

  getCitas( pacienteId : string){
    this.citaObstService.getCitasObst(pacienteId).subscribe(
      res => {
        this.citaObstService.citasObst = res
        this.numeroCita = this.citaObstService.citasObst.length + 1
      }
    )
  }

  openSnakbar(){
    this.snackbar.open('Cita Created','Cerrar', {
      duration: 2000
    })
  }

}
