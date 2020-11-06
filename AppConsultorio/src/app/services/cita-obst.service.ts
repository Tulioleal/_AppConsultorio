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
    visita: 1,
    motivo: "",
    HistEnfEvo: "",
    HistClinPre: "",
    ultMenst: "",
    penMenst: "",
    fechaEmb: "",
    semanas: 1,
    diasEmb: 1,
    meses: 1,
    conDias: 1,
    pesoAEmb: 1,
    altura: 1,
    percepFetal: "",
    exGenEstadoG: "",
    exGenPA: "",
    exGenPulso: "",
    exGenFR: "",
    exGenPeso: 1,
    exGenAlt: 1,
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

  getCitasObst(){
    return this.http.get<CitaObst>(`${this.URI_API}`)
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

}
