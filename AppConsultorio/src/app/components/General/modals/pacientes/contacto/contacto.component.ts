import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

//Services
import { PacienteService } from '../../../../../services/paciente.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    public pacienteService : PacienteService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  getPacientes(){
    this.pacienteService.getPacientes().subscribe(
      res => this.pacienteService.pacientes = res,
      err => console.log(err)
    )
  }
}
