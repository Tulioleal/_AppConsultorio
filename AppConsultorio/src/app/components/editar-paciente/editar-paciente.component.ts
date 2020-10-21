import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  constructor( public pacienteService: PacienteService, private snackbar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackbar.open('Paciente Editada exitosamente', `Cerrar`, {
      duration: 4000
    })
  }

  cancelEdit(form:NgForm){
    if  ( confirm("You will lose the new information in this form") ) {
      this.resetForm(form)
    }
  }

  resetForm(form:NgForm){
    form.reset()
  }

  updatePaciente(form: NgForm){
    this.pacienteService.updatePaciente(form.value).subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => console.log(err)
    )
  }
}
