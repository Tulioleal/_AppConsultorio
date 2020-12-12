import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { HomeComponent } from './components/General/home/home.component'
import { PacienteComponent } from './components/PacienteComponents/paciente/paciente.component'
import { FormularioPacienteComponent } from './components/PacienteComponents/formulario-paciente/formulario-paciente.component'
import { EditarPacienteComponent } from './components/PacienteComponents/editar-paciente/editar-paciente.component'
import { PacienteEspecificoComponent } from './components/PacienteComponents/paciente-especifico/paciente-especifico.component'
import { AddCitaObstComponent } from './components/Cita/add-cita-obst/add-cita-obst.component';
import { AddCitaGinecoComponent } from './components/Cita/add-cita-gineco/add-cita-gineco.component';
import { EditCitaObstComponent } from './components/Cita/edit-cita-obst/edit-cita-obst.component';
import { EditCitaGinecoComponent } from './components/Cita/edit-cita-gineco/edit-cita-gineco.component';


const routes: Routes = [
  { path:"pacientes/addPaciente", component: FormularioPacienteComponent },
  { path:"pacientes/edit", component: EditarPacienteComponent },
  { path:"pacientes/especific", component: PacienteEspecificoComponent },
  { path:"citas/addCitaGineco", component: AddCitaGinecoComponent },
  { path:"citas/addCitaObst", component: AddCitaObstComponent },
  { path:"citas/editCitaGineco", component: EditCitaGinecoComponent },
  { path:"citas/editCitaObst", component: EditCitaObstComponent },
  { path:"pacientes", component: PacienteComponent },
  { path:"home", component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
