import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

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

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    HomeComponent,
    FormularioPacienteComponent,
    FormularioCitaComponent,
    EditarPacienteComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
