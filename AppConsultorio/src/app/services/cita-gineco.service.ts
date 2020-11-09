import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CitaGineco } from '../models/citaGineco'

@Injectable({
  providedIn: 'root'
})
export class CitaGinecoService {

  URI_API ='http://localhost:4000/api/citasGineco'

  selectedCitaGineco : CitaGineco = {
    pacienteId: "",
    visita: 1,
    motivo: "",
    histEnfEvo: "",
    genEstado: "",
    genComentarios: "",
    ginecoMamas: "",
    ginecoGen: "",
    ginecoGenExt: "",
    ginecoCervix: "",
    ginecoUtero: "",
    ginecoImpClin: "",
    ginecoColpos: "",
  }

  citasGineco: CitaGineco[]
  citaGineco: CitaGineco

  constructor( private http: HttpClient ) { }

  getCitasGineco(){
    return this.http.get<CitaGineco[]>(`${this.URI_API}`)
  }

  getCitaGineco(_id: string){
    return this.http.get<CitaGineco>(`${this.URI_API}/${_id}`)
  }

  createCitaGineco( citaGineco : CitaGineco ){
    return this.http.post(this.URI_API, citaGineco)
  }

  updateCitaGineco( citaGineco : CitaGineco){
    return this.http.put(`${this.URI_API}/${citaGineco._id}`, citaGineco)
  }

  deleteCitaGineco( _id: string ){
    return this.http.delete(`${this.URI_API}/${_id}`)
  }

}
