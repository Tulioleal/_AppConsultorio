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

  submitted : boolean

  constructor( public pacienteService: PacienteService, private snackbar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    if(this.submitted){
      this.snackbar.open('Paciente Ingresada', 'Cerrar', {
        duration: 2000
      })
    }else{
      this.snackbar.open('Error en uno de los campos', 'Cerrar', {
        duration: 2000
      })
    }
  }

  addPaciente( form: NgForm ){
    this.pacienteService.createPaciente(form.value).subscribe(
      res => {
        this.submitted = true
        console.log(res)
      },
      err => {
        this.submitted = false
        console.log(err)
      })
      this.openSnackBar()
    }
}
