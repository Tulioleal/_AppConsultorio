import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent implements OnInit {

  constructor( public pacienteService: PacienteService ) { }

  ngOnInit(): void {
  }

  addPaciente( form: NgForm ){
    this.pacienteService.createPaciente(form.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
