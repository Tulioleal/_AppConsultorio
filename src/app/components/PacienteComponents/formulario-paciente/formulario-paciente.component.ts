import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';

//SERVICE
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent implements OnInit {

  constructor(
    public pacienteService: PacienteService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addPaciente(form: NgForm) {
    this.pacienteService.createPaciente(form.value).subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => {
        console.log(err)
      }
    )
  }

  private openSnackBar() {
    this.snackbar.open('Paciente Created', 'Cerrar', {
      duration: 2000
    })
  }
}
