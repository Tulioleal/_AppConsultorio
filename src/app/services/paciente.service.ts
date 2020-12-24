import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  //http://localhost:4000/
  URL_API = 'http://localhost:4000/api/pacientes'

  selectedPaciente : Paciente = {
    nombre: "",
    apellido: "",
    nacimiento: "",
    telf: "",
    email: "",
    seguimiento: false,
    antecedentePersonal: "",
    antecedenteFamiliar: "",
    ginecoMenorrea: false,
    ginecoGestas: 0,
    ginecoParas: 0,
    ginecoCiclos: "",
    ginecoAbortos: 0,
    ginecoCesareas: 0,
    ginecoOtros: 0,
    ginecoMetodo: "",
    ginecoMenopausia : 0,
    ginecoMenarquia: 0,
    ginecoPRS: 0,
    ginecoTRH: "",
  }

  pacientes: Paciente[]
  paciente: Paciente

  year: number = new Date().getFullYear()
  month: number = new Date().getMonth() + 1
  day: number = new Date().getDate()

  constructor( private http: HttpClient ) { }

  getPacientes(){
    return this.http.get<Paciente[]>(this.URL_API)
  }

  getpaciente(_id : string){
    return this.http.get<Paciente>(`${this.URL_API}/${_id}`)
  }

  createPaciente( paciente: Paciente ){
    return this.http.post(this.URL_API, paciente)
  }

  updatePaciente( paciente: Paciente ){
    return this.http.put(`${this.URL_API}/${paciente._id}`, paciente)
  }

  deletePaciente(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  acortarNombre() {
    for (let i = 0; i < this.pacientes.length; i++) {
      let array = this.pacientes[i].nombre.split(' ')
      this.pacientes[i].nombreCortado = array[0]
    }
  }

  acortarApellido() {
    for (let i = 0; i < this.pacientes.length; i++) {
      let array = this.pacientes[i].apellido.split(' ')
      this.pacientes[i].apellidoCortado = array[0]
    }
  }

  compararfechas() {
    for (let i = 0; i < this.pacientes.length; i++) {
      let nuevafecha = this.pacientes[i].nacimiento.slice(0, 10)
      let array = nuevafecha.split('-')
      let edad = this.year - parseInt(array[0])
      if (parseInt(array[1]) > this.month) {
        edad--
      } else if (parseInt(array[1]) === this.month) {
        if (parseInt(array[2]) > this.day) {
          edad--
        }
      }
      this.pacientes[i].edad = edad
    }
  }

  clearForm(){
    this.selectedPaciente = {
      nombre: "",
      apellido: "",
      nacimiento: "",
      telf: "",
      email: "",
      seguimiento: false,
      antecedentePersonal: "",
      antecedenteFamiliar: "",
      ginecoMenorrea: false,
      ginecoGestas: 0,
      ginecoParas: 0,
      ginecoCiclos: "",
      ginecoAbortos: 0,
      ginecoCesareas: 0,
      ginecoOtros: 0,
      ginecoMetodo: "",
      ginecoMenopausia : 0,
      ginecoMenarquia: 0,
      ginecoPRS: 0,
      ginecoTRH: "",
    }
  }
}
