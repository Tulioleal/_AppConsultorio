import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material Module
import { MaterialModules } from './material.module';

// Components
import { AppComponent } from './app.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioPacienteComponent } from './components/formulario-paciente/formulario-paciente.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AntecedentesComponent } from './components/modals/antecedentes/antecedentes.component';
import { ContactoComponent } from './components/modals/contacto/contacto.component';
import { DeletePacienteComponent } from './components/modals/delete-paciente/delete-paciente.component';
import { CancelEditComponent } from './components/modals/cancel-edit/cancel-edit.component';
import { AutocompleteComponent } from './components/navegacion/autocomplete/autocomplete.component';
import { PacienteEspecificoComponent } from './components/paciente-especifico/paciente-especifico.component';
import { CitaComponent } from './components/cita/cita/cita.component';
import { AddCitaObstComponent } from './components/cita/add-cita-obst/add-cita-obst.component';
import { AddCitaGinecoComponent } from './components/cita/add-cita-gineco/add-cita-gineco.component';
import { EditCitaObstComponent } from './components/cita/edit-cita-obst/edit-cita-obst.component';
import { EditCitaGinecoComponent } from './components/cita/edit-cita-gineco/edit-cita-gineco.component';
import { AddCitaComponent } from './components/modals/cita/add-cita/add-cita.component';
import { DeleteCitaComponent } from './components/modals/cita/delete-cita/delete-cita.component';
import { ShowPacienteCitaComponent } from './components/modals/cita/show-paciente-cita/show-paciente-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    HomeComponent,
    FormularioPacienteComponent,
    EditarPacienteComponent,
    NavegacionComponent,
    AntecedentesComponent,
    ContactoComponent,
    DeletePacienteComponent,
    CancelEditComponent,
    AutocompleteComponent,
    PacienteEspecificoComponent,
    CitaComponent,
    AddCitaObstComponent,
    AddCitaGinecoComponent,
    EditCitaObstComponent,
    EditCitaGinecoComponent,
    AddCitaComponent,
    DeleteCitaComponent,
    ShowPacienteCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
