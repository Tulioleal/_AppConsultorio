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
  ginecoCiclos: string
  ginecoParas: number
  ginecoAbortos: number
  ginecoCesareas: number
  ginecoOtros: number
  ginecoMetodo: string
  ginecoMenopausia: number
  ginecoMenarquia: number
  ginecoPRS: number
  ginecoTRH: string
  nombreCortado?: string
  apellidoCortado?: string
  edad?: number
  createdAt?: string
  updatedAt?: string
  _id?: string
}

