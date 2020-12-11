import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

//Components
import { DeleteComponent } from '../../General/modals/delete/delete.component';
import { AddCitaComponent } from '../../General/modals/cita/add-cita/add-cita.component';

//Services
import { PacienteService } from 'src/app/services/paciente.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowPacienteCitaComponent } from '../../General/modals/cita/show-paciente-cita/show-paciente-cita.component';

@Component({
  selector: 'app-paciente-especifico',
  templateUrl: './paciente-especifico.component.html',
  styleUrls: ['./paciente-especifico.component.scss']
})

export class PacienteEspecificoComponent implements OnInit {

  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  editPaciente(paciente: Paciente) {
    this.pacienteService.selectedPaciente = paciente;
  }

  openDelete(id: string, type: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '30%';
    dialogConfig.data = {
      id: id,
      type: type
     };
    this.dialog.open(DeleteComponent, dialogConfig);
  }

  openAddCita(id: string, gestas:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '30%';
    dialogConfig.height = '20%';
    dialogConfig.data = { id: id, gestas:gestas };
    this.dialog.open(AddCitaComponent, dialogConfig);
  }

  openShowPacienteCitas(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '80%';
    dialogConfig.data = { id: id };
    this.dialog.open(ShowPacienteCitaComponent, dialogConfig);
  }

}
