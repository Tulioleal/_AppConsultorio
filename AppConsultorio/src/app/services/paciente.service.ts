import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

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
    ginecoAbortos: 0,
    ginecoCesareas: 0,
    ginecoOtros: 0,
    ginecoMetodo: "",
    ginecoMenopausia : "",
    ginecoTRH: "",
  }

  pacientes:  Paciente[]

  constructor( private http: HttpClient ) { }

  getPacientes(){
    return this.http.get<Paciente[]>(this.URL_API)
  }

  createPaciente( paciente: Paciente ){
    return this.http.post(this.URL_API, paciente)
  }

}
