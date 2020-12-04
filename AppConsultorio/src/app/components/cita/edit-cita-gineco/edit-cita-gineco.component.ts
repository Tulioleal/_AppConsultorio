import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitaGinecoService } from 'src/app/services/cita-gineco.service';
import { CancelEditComponent } from '../../modals/cancel-edit/cancel-edit.component';

@Component({
  selector: 'app-edit-cita-gineco',
  templateUrl: './edit-cita-gineco.component.html',
  styleUrls: ['./edit-cita-gineco.component.scss']
})
export class EditCitaGinecoComponent implements OnInit {

  constructor(
    public citaGinecoService : CitaGinecoService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  numeroCita: Number = this.citaGinecoService.selectedCitaGineco.visita

  ngOnInit(): void {

  }

  updateCitaGineco(form: NgForm){
    this.citaGinecoService.updateCitaGineco(form.value)
    .subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => console.log(err)
    )
  }

  private openSnackBar() {
    this.snackbar.open('Cita Editada exitosamente', 'Cerrar', {
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
