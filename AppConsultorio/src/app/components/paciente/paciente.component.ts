//Angular
import { Component, OnInit } from '@angular/core';

//Components
import { AntecedentesComponent } from '../modals/antecedentes/antecedentes.component';
import { ContactoComponent } from '../modals/contacto/contacto.component';

//Material Components
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

//Services
import { PacienteService } from '../../services/paciente.service'
import { Paciente } from 'src/app/models/paciente';
import { DeletePacienteComponent } from '../modals/delete-paciente/delete-paciente.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  delMessage: string = 'Are you sure yo want to delete? All the information from this patient willbe DELETED PERMANENTLY'

  constructor(public pacienteService: PacienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  getPacientes() {
    this.pacienteService.getPacientes()
      .subscribe(
        res => {
          this.pacienteService.pacientes = res
          this.pacienteService.acortarNombre()
          this.pacienteService.acortarApellido()
          this.pacienteService.compararfechas()
        },
        err => console.log(err)
      )
  }

  editPaciente(paciente: Paciente) {
    this.pacienteService.selectedPaciente = paciente
  }

  openAntecedentes(i: number) {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "70%"
    dialogConfig.height = "75%"
    dialogConfig.data = { i: i }
    this.dialog.open(AntecedentesComponent, dialogConfig)
  }

  openContacto(i: number) {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "30%"
    dialogConfig.height = "30%"
    dialogConfig.data = { i: i }
    this.dialog.open(ContactoComponent, dialogConfig)
  }

  openDelete(id: string) {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = false
    dialogConfig.width = "35%"
    dialogConfig.height = "30%"
    dialogConfig.data = { id: id }
    this.dialog.open(DeletePacienteComponent, dialogConfig)
  }
}
