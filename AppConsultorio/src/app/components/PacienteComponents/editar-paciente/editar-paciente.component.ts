import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

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
    public pacienteService: PacienteService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  updatePaciente(form: NgForm){
    this.pacienteService.updatePaciente(form.value)
    .subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => console.log(err)
    )
  }

  private openSnackBar() {
    this.snackbar.open('Paciente Editada exitosamente', 'Cerrar', {
      duration: 4000
    })
  }

  openCancel(){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = false
    dialogConfig.width = "27%"
    dialogConfig.height = "32%"
    this.dialog.open(CancelEditComponent, dialogConfig)
  }

}
