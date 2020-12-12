import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CitaGinecoService } from 'src/app/services/cita-gineco.service';
import { CitaObstService } from 'src/app/services/cita-obst.service';

//Services
import { PacienteService } from '../../../../services/paciente.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    public pacienteService : PacienteService,
    public ginecoService : CitaGinecoService,
    public obstService : CitaObstService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  deletePaciente(id: string){
    this.pacienteService.deletePaciente(id).subscribe(
      res => {
        console.log(res)
        this.getPacientes()
      },
      err => console.log(err)
    )
  }

  deleteCitaGineco(id:string){
    this.ginecoService.deleteCitaGineco(id).subscribe(
      res => {
        console.log(res)
        this.getCitas()
      }
    )
  }

  deleteCitaObst(id:string){
    this.obstService.deleteCitaObst(id).subscribe(
      res =>{
        console.log(res)
        this.getCitas()
      }
    )
  }

  getCitas(){
    this.ginecoService.getCitasGineco(
      this.pacienteService.selectedPaciente._id)
      .subscribe(
      res=>{
        this.ginecoService.citasGineco = res
      }
    )
    this.obstService.getCitasObst(
      this.pacienteService.selectedPaciente._id)
      .subscribe(
      res=>{
        this.obstService.citasObst = res
      }
    )
  }

  getPacientes() {
    this.pacienteService.getPacientes()
    .subscribe(
      res => {
        this.pacienteService.pacientes = res
        this.pacienteService.acortarNombre()
        this.pacienteService.acortarApellido()
        this.pacienteService.compararfechas()
      },
      err => console.log(err)
    )
  }
}
