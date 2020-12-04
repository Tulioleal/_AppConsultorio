import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

//Services
import { PacienteService } from '../../../../../services/paciente.service'

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.scss']
})
export class AntecedentesComponent implements OnInit {

  constructor( public pacienteService : PacienteService, @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
  }

}
