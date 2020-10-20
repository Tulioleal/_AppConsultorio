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

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  year: number = new Date().getFullYear()
  month: number = new Date().getMonth() + 1
  day: number = new Date().getDate()

  delMessage : string = 'Are you sure yo want to delete? All the information from this patient willbe DELETED PERMANENTLY'

  constructor(public pacienteService: PacienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  acortarNombre() {
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let array = this.pacienteService.pacientes[i].nombre.split(' ')
      this.pacienteService.pacientes[i].nombreCortado = array[0]
    }
  }

  acortarApellido() {
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let array = this.pacienteService.pacientes[i].apellido.split(' ')
      this.pacienteService.pacientes[i].apellidoCortado = array[0]
    }
  }

  compararfechas() {
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let nuevafecha = this.pacienteService.pacientes[i].nacimiento.slice(0, 10)
      let array = nuevafecha.split('-')
      let edad = this.year - parseInt(array[0])
      if (parseInt(array[1]) > this.month) {
        edad--
      } else if (parseInt(array[1]) === this.month) {
        if (parseInt(array[2]) > this.day) {
          edad--
        }
      }
      this.pacienteService.pacientes[i].edad = edad
    }
  }

  getPacientes() {
    this.pacienteService.getPacientes()
      .subscribe(
        res => {
          this.pacienteService.pacientes = res
          this.acortarNombre()
          this.acortarApellido()
          this.compararfechas()
        },
        err => console.log(err)
      )
  }

  deletePaciente(id: string) {
    if (confirm(this.delMessage)) {
      this.pacienteService.deletePaciente(id)
        .subscribe(
          res => {
            console.log(res)
            this.getPacientes()
          },
          err => {
            console.log(err)
          }
        )
    }
  }

  editPaciente(paciente: Paciente){
    this.pacienteService.selectedPaciente = paciente
  }

  openAntecedentes(i: number) {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true
    dialogConfig.width = "70%"
    dialogConfig.height = "75%"
    dialogConfig.data = { i: i }
    this.dialog.open(AntecedentesComponent, dialogConfig)
  }

  openContacto(i: number) {

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true
    dialogConfig.width = "30%"
    dialogConfig.height = "30%"
    dialogConfig.data = { i: i }
    this.dialog.open(ContactoComponent, dialogConfig)
  }
}
