import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CitaGineco } from '../models/citaGineco'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CitaGinecoService {

  //http://localhost:4000/

  URI_API ='api/citasGineco'

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

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getCitasGineco(pacienteId: string){
    return this.http.get<CitaGineco[]>(`${this.URI_API}/${pacienteId}`)
  }

  getCitaGineco(pacienteId: string, _id: string){
    return this.http.get<CitaGineco>(`${this.URI_API}/${pacienteId}/${_id}`)
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

  error(){
    return this.router.navigate(['/home'])
  }

  clearForm(){
    this.selectedCitaGineco ={
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
  }

}
