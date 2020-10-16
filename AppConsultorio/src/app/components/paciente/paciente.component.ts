//Angular
import { Component, OnInit } from '@angular/core';

//Services
import { PacienteService } from '../../services/paciente.service'

//Components
import { AntecedentesComponent } from '../modals/antecedentes/antecedentes.component';
import { ContactoComponent } from '../modals/contacto/contacto.component';

//Material Components
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  year: number = new Date().getFullYear()
  month: number = new Date().getMonth() + 1
  day: number = new Date().getDate()

  constructor(public pacienteService: PacienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  acortarNombre() {
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let array = this.pacienteService.pacientes[i].nombre.split(' ')
      this.pacienteService.pacientes[i].nombre = array[0]
    }
  }

  acortarApellido() {
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let array = this.pacienteService.pacientes[i].apellido.split(' ')
      this.pacienteService.pacientes[i].apellido = array[0]
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
      this.pacienteService.pacientes[i].nacimiento = edad.toString()
    }
  }

  getPacientes() {
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.pacienteService.pacientes = res
        this.acortarNombre()
        this.acortarApellido()
        this.compararfechas()
      },
      err => console.log(err)
    )
  }

  openAntecedentes(i:number){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true
    dialogConfig.width = "60%"
    dialogConfig.height = "60%"
    dialogConfig.data = { i : i }
    this.dialog.open(AntecedentesComponent,dialogConfig)
  }

  openContacto(i:number){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true
    dialogConfig.width = "30%"
    dialogConfig.height = "25%"
    dialogConfig.data = { i : i }
    this.dialog.open(ContactoComponent,dialogConfig)
  }
}
