import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent implements OnInit {

  constructor( public pacienteService: PacienteService, private snackbar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackbar.open('Paciente Ingresada', 'Cerrar', {
      duration: 2000
    })
  }

  addPaciente( form: NgForm ){
    this.pacienteService.createPaciente(form.value).subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => {
        console.log(err)
      })
    }
}
