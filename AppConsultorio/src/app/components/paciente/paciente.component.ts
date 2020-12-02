//Angular
import { Component, OnInit } from '@angular/core';

//Components
import { AntecedentesComponent } from '../modals/antecedentes/antecedentes.component';
import { ContactoComponent } from '../modals/contacto/contacto.component';
import { DeletePacienteComponent } from '../modals/delete-paciente/delete-paciente.component';

//Material Components
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

//Services
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { AddCitaComponent } from '../modals/cita/add-cita/add-cita.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {
  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.pacienteService.getPacientes().subscribe(
      (res) => {
        this.pacienteService.pacientes = res;
        this.pacienteService.acortarNombre();
        this.pacienteService.acortarApellido();
        this.pacienteService.compararfechas();
      },
      (err) => console.log(err)
    );
  }

  getPaciente(id: string){
    this.pacienteService.getpaciente(id).subscribe(
      res => {
        this.pacienteService.selectedPaciente = res;
      },
      err => console.log(err)
    )
  }

  editPaciente(paciente: Paciente) {
    this.pacienteService.selectedPaciente = paciente;
  }

//OPEN MODALS

  openAntecedentes(i: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    dialogConfig.height = '75%';
    dialogConfig.data = { i: i };
    this.dialog.open(AntecedentesComponent, dialogConfig);
  }

  openContacto(i: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.height = '30%';
    dialogConfig.data = { i: i };
    this.dialog.open(ContactoComponent, dialogConfig);
  }

  openDelete(id: string, type:string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '30%';
    dialogConfig.data = {
      id: id,
      type:type
    };
    this.dialog.open(DeletePacienteComponent, dialogConfig);
  }

  openAddCita(id: string, gestas: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '30%';
    dialogConfig.height = '20%';
    dialogConfig.data = { id: id, gestas: gestas };
    this.dialog.open(AddCitaComponent, dialogConfig);
  }
}
