import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CitaObst } from '../models/citaObst'

@Injectable({
  providedIn: 'root'
})
export class CitaObstService {

  URI_API = '/api/citasObst'

  selectedCitaObst : CitaObst = {
    pacienteId: "",
    visita: 0,
    motivo: "",
    histEnfAct: "",
    ultMenst: "",
    penMenst: "",
    fechaEmb: "",
    pesoAEmb: 0,
    altura: 0,
    gestas: 0,
    percepFetal: "",
    exGenEstadoG: "",
    exGenPA: "",
    exGenPulso: "",
    exGenFR: "",
    exGenPeso: 0,
    exGenAlt: 0,
    exObsAbdom: "",
    exObsMovFet: "",
    exObsAltUt: "",
    exObsCircunAbdom: "",
    exObsFCF: "",
    exGineco: ""
  }

  citasObst : CitaObst[]
  citaObst : CitaObst

  year: number = new Date().getFullYear()
  date: number = Date.now()

  fProbable: Date

  constructor( private http: HttpClient ) { }

  getCitasObst(pacienteId: string){
    return this.http.get<CitaObst[]>(`${this.URI_API}/${pacienteId}`)
  }

  getCitasGes(pacienteId: string, gestas: number){
    return this.http.get<CitaObst[]>(`${this.URI_API}/${pacienteId}/${gestas}`)
  }

  getCitaObst(pacienteId: string, gestas: number, _id : string){
    return this.http.get<CitaObst>(`${this.URI_API}/${pacienteId}/${gestas}/${_id}`)
  }

  createCitaObst( citaObst : CitaObst ){
    return this.http.post(this.URI_API, citaObst)
  }

  updateCitaObst( citaObst : CitaObst ){
    return this.http.put(`${this.URI_API}/${citaObst._id}`, citaObst)
  }

  deleteCitaObst( _id: string ){
    return this.http.delete(`${this.URI_API}/${_id}`)
  }

  fechaProbable(){
    let fechaTime: number = Date.parse(this.selectedCitaObst.ultMenst)
    this.fProbable = new Date(fechaTime + 24192000000)
  }

  imcCalc(peso: number, altura: number) {
    let imc = Math.round(peso / (altura / 100) ** 2);
    return imc;
  }

  calc(dif: number, tiempo: number, tiempo2?: number) {
    let res;

    if (tiempo2) {
      res = Math.floor((dif % tiempo) / tiempo2);
    } else {
      res = Math.floor(dif / tiempo);
    }
    return res;
  }

  clearForm(){
    this.selectedCitaObst = {
      pacienteId: "",
      visita: 0,
      motivo: "",
      histEnfAct: "",
      ultMenst: "",
      penMenst: "",
      fechaEmb: "",
      pesoAEmb: 0,
      gestas: 0,
      altura: 0,
      percepFetal: "",
      exGenEstadoG: "",
      exGenPA: "",
      exGenPulso: "",
      exGenFR: "",
      exGenPeso: 0,
      exGenAlt: 0,
      exObsAbdom: "",
      exObsMovFet: "",
      exObsAltUt: "",
      exObsCircunAbdom: "",
      exObsFCF: "",
      exGineco: ""
    }
  }
}
