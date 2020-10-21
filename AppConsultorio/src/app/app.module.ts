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
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AntecedentesComponent } from './components/modals/antecedentes/antecedentes.component';
import { ContactoComponent } from './components/modals/contacto/contacto.component';
import { DeletePacienteComponent } from './components/modals/delete-paciente/delete-paciente.component';
import { CancelEditComponent } from './components/modals/cancel-edit/cancel-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    HomeComponent,
    FormularioPacienteComponent,
    FormularioCitaComponent,
    EditarPacienteComponent,
    NavegacionComponent,
    AntecedentesComponent,
    ContactoComponent,
    DeletePacienteComponent,
    CancelEditComponent,
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
