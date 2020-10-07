export interface Paciente {
  nombre: string
  apellido: string
  nacimiento: string
  telf: string
  email: string
  seguimiento: boolean
  antecedentePersonal: string
  antecedenteFamiliar: string
  ginecoMenorrea: boolean
  ginecoGestas: number
  ginecoParas: number
  ginecoAbortos: number
  ginecoCesareas: number
  ginecoOtros: number
  ginecoMetodo: string
  ginecoMenopausia: string
  ginecoTRH: string
  createdAt?: string
  updatedAt?: string
  _id?: string
}

