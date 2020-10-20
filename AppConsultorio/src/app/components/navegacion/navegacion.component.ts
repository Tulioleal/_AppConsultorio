//Angular
import { Component, OnInit } from '@angular/core';

//Services
import { PacienteService } from '../../services/paciente.service'
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor( public pacienteService: PacienteService ) { }

  ngOnInit(): void {
  }

  clearForm(){
    this.pacienteService.selectedPaciente = {
      nombre: "",
      apellido: "",
      nacimiento: "",
      telf: "",
      email: "",
      seguimiento: false,
      antecedentePersonal: "",
      antecedenteFamiliar: "",
      ginecoMenorrea: false,
      ginecoGestas: 0,
      ginecoParas: 0,
      ginecoAbortos: 0,
      ginecoCesareas: 0,
      ginecoOtros: 0,
      ginecoMetodo: "",
      ginecoMenopausia : 0,
      ginecoTRH: "",
    }
  }

}
