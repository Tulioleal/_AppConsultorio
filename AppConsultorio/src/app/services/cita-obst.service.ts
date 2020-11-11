import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CitaObst } from '../models/citaObst'

@Injectable({
  providedIn: 'root'
})
export class CitaObstService {

  URI_API = 'http://localhost:4000/api/citasObst'

  selectedCitaObst : CitaObst = {
    pacienteId: "",
    visita: 0,
    motivo: "",
    histEnfAct: "",
    ultMenst: "",
    penMenst: "",
    fechaEmb: "",
    semanas: 0,
    diasEmb: 0,
    meses: 0,
    conDias: 0,
    pesoAEmb: 0,
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

  citasObst : CitaObst[]
  citaObst : CitaObst

  constructor( private http: HttpClient ) { }

  getCitasObst(pacienteId: string){
    return this.http.get<CitaObst[]>(`${this.URI_API}/${pacienteId}`)
  }

  getCitaObst(_id : string){
    return this.http.get<CitaObst>(`${this.URI_API}/${_id}`)
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

  clearForm(){
    this.selectedCitaObst = {
      pacienteId: "",
      visita: 0,
      motivo: "",
      histEnfAct: "",
      ultMenst: "",
      penMenst: "",
      fechaEmb: "",
      semanas: 0,
      diasEmb: 0,
      meses: 0,
      conDias: 0,
      pesoAEmb: 0,
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
