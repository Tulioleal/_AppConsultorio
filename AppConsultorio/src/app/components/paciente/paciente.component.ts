import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  today : Date = new Date()
  year : number = this.today.getFullYear()
  month : number = this.today.getMonth() + 1
  day : number = this.today.getDate()

  constructor( public pacienteService: PacienteService ) { }

  ngOnInit(): void {
    this.getPacientes()
  }

  compararfechas(){
    for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
      let nuevafecha = this.pacienteService.pacientes[i].nacimiento.slice(0, 10)
      let array = nuevafecha.split('-')
      let edad = this.year - parseInt(array[0])
      console.log(edad)
      console.log(this.month)
        this.pacienteService.pacientes[i].nacimiento = edad.toString()
      }
  }

  getPacientes(){
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.pacienteService.pacientes = res
        for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
          let array = this.pacienteService.pacientes[i].nombre.split(' ')
          this.pacienteService.pacientes[i].nombre = array[0]
        }
        for (let i = 0; i < this.pacienteService.pacientes.length; i++) {
          let array = this.pacienteService.pacientes[i].apellido.split(' ')
          this.pacienteService.pacientes[i].apellido = array[0]
        }
        this.compararfechas()
      },
      err => console.log(err)
    )
  }
}
