import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  constructor( public pacienteService: PacienteService ) { }

  ngOnInit(): void {
    this.getPacientes()
  }


  getPacientes(){
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.pacienteService.pacientes = res
      },
      err => console.log(err)
    )
  }
}
