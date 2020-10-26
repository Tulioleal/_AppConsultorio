import { Component, OnInit } from '@angular/core';
// import { Paciente } from '../../models/paciente'

//Services
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-especifico',
  templateUrl: './paciente-especifico.component.html',
  styleUrls: ['./paciente-especifico.component.scss']
})

export class PacienteEspecificoComponent implements OnInit {

  //paciente: Paciente = this.pacienteService.selectedPaciente

  constructor(
    public pacienteService: PacienteService,
    ) { }

    ngOnInit(): void {
    }

}
