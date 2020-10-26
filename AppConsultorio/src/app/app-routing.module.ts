import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { HomeComponent } from './components/home/home.component'
import { PacienteComponent } from './components/paciente/paciente.component'
import { FormularioPacienteComponent } from './components/formulario-paciente/formulario-paciente.component'
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component'
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component'
import { PacienteEspecificoComponent } from './components/paciente-especifico/paciente-especifico.component'


const routes: Routes = [
  { path:"pacientes/addPaciente", component: FormularioPacienteComponent },
  { path:"pacientes/edit", component: EditarPacienteComponent },
  { path:"pacientes/addCita", component: FormularioCitaComponent },
  { path:"pacientes/especific", component: PacienteEspecificoComponent },
  { path:"pacientes", component: PacienteComponent },
  { path:"home", component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
