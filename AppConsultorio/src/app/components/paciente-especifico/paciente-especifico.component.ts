import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

//Components
import { DeletePacienteComponent } from '../modals/delete-paciente/delete-paciente.component';

//Services
import { PacienteService } from 'src/app/services/paciente.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-paciente-especifico',
  templateUrl: './paciente-especifico.component.html',
  styleUrls: ['./paciente-especifico.component.scss']
})

export class PacienteEspecificoComponent implements OnInit {

  //paciente: Paciente = this.pacienteService.selectedPaciente

  constructor(
    public pacienteService: PacienteService,
    public dialog: MatDialog,
  ) { }

    ngOnInit(): void {
    }

    editPaciente(paciente: Paciente) {
      this.pacienteService.selectedPaciente = paciente;
    }

    openDelete(id: string) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = false;
      dialogConfig.width = '35%';
      dialogConfig.height = '30%';
      dialogConfig.data = { id: id };
      this.dialog.open(DeletePacienteComponent, dialogConfig);
    }

}
