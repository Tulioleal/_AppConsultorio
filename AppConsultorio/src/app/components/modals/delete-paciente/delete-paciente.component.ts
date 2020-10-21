import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

//Services
import { PacienteService } from '../../../services/paciente.service'

@Component({
  selector: 'app-delete-paciente',
  templateUrl: './delete-paciente.component.html',
  styleUrls: ['./delete-paciente.component.scss']
})
export class DeletePacienteComponent implements OnInit {

  constructor(
    public pacienteService : PacienteService,
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
