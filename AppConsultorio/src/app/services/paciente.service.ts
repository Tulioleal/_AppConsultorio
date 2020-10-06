import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL_API = 'http://localhost:4000/api/pacientes'

  pacientes:  Paciente[]

  constructor( private http: HttpClient ) { }

  getPacientes(){
    return this.http.get<Paciente[]>(this.URL_API)
  }

}
