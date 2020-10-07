import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioPacienteComponent } from './components/formulario-paciente/formulario-paciente.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    HomeComponent,
    FormularioPacienteComponent,
    FormularioCitaComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
