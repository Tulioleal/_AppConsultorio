import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CitaGinecoService } from 'src/app/services/cita-gineco.service';
import { CancelEditComponent } from '../../General/modals/cancel-edit/cancel-edit.component';

@Component({
  selector: 'app-edit-cita-gineco',
  templateUrl: './edit-cita-gineco.component.html',
  styleUrls: ['./edit-cita-gineco.component.scss']
})
export class EditCitaGinecoComponent implements OnInit {

  constructor(
    public citaGinecoService : CitaGinecoService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
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
        this.router.navigate(['/pacientes/especific'])
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
