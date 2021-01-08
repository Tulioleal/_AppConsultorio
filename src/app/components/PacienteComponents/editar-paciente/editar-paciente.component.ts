import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

//Components
import { CancelEditComponent } from '../../General/modals/cancel-edit/cancel-edit.component';

//Material Components
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

//Services
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    public pacienteService: PacienteService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  updatePaciente(form: NgForm){
    this.pacienteService.updatePaciente(form.value)
    .subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
        this.router.navigate(['/pacientes/especific'])
      },
      err => {
        console.log(err)
        this.pacienteService.error()
      }
    )
  }

  private openSnackBar() {
    this.snackbar.open('Paciente Editada exitosamente', 'Cerrar', {
      duration: 3000
    })
  }

  openCancel(){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = false
    dialogConfig.width = "35%"
    dialogConfig.height = "32%"
    this.dialog.open(CancelEditComponent, dialogConfig)
  }

  openCancelMovil(){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = false
    dialogConfig.width = "90%"
    dialogConfig.height = "40%"
    this.dialog.open(CancelEditComponent, dialogConfig)
  }
}
