import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material Module
import { MaterialModules } from './material.module';

// Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PacienteComponent } from './components/PacienteComponents/paciente/paciente.component';
import { HomeComponent } from './components/General/home/home.component';
import { FormularioPacienteComponent } from './components/PacienteComponents/formulario-paciente/formulario-paciente.component';
import { EditarPacienteComponent } from './components/PacienteComponents/editar-paciente/editar-paciente.component';
import { NavegacionComponent } from './components/General/navegacion/navegacion.component';
import { AntecedentesComponent } from './components/General/modals/pacientes/antecedentes/antecedentes.component';
import { ContactoComponent } from './components/General/modals/pacientes/contacto/contacto.component';
import { DeleteComponent } from './components/General/modals/delete/delete.component';
import { CancelEditComponent } from './components/General/modals/cancel-edit/cancel-edit.component';
import { AutocompleteComponent } from './components/General/navegacion/autocomplete/autocomplete.component';
import { PacienteEspecificoComponent } from './components/PacienteComponents/paciente-especifico/paciente-especifico.component';
import { AddCitaObstComponent } from './components/Cita/add-cita-obst/add-cita-obst.component';
import { AddCitaGinecoComponent } from './components/Cita/add-cita-gineco/add-cita-gineco.component';
import { EditCitaObstComponent } from './components/Cita/edit-cita-obst/edit-cita-obst.component';
import { EditCitaGinecoComponent } from './components/Cita/edit-cita-gineco/edit-cita-gineco.component';
import { AddCitaComponent } from './components/General/modals/cita/add-cita/add-cita.component';
import { ShowPacienteCitaComponent } from './components/General/modals/cita/show-paciente-cita/show-paciente-cita.component';
import { ShowSpecificCitaComponent } from './components/General/modals/cita/show-specific-cita/show-specific-cita.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

//Services and Guards
import { AuthService } from './services/auth.service';
import { PacienteService } from './services/paciente.service';
import { CitaGinecoService } from './services/cita-gineco.service';
import { CitaObstService } from './services/cita-obst.service';
import { AuthGuard } from './guard/auth.guard';

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
    DeleteComponent,
    CancelEditComponent,
    AutocompleteComponent,
    PacienteEspecificoComponent,
    AddCitaObstComponent,
    AddCitaGinecoComponent,
    EditCitaObstComponent,
    EditCitaGinecoComponent,
    AddCitaComponent,
    DeleteComponent,
    ShowPacienteCitaComponent,
    ShowSpecificCitaComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModules,
    CommonModule,
  ],
  providers: [
    AuthService,
    PacienteService,
    CitaGinecoService,
    CitaObstService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
