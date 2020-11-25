//Angular
import { Component, OnInit } from '@angular/core';

//Material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

//Components
import { ShowSpecificCitaComponent } from '../show-specific-cita/show-specific-cita.component';

//Services
import { PacienteService } from 'src/app/services/paciente.service';
import { CitaGinecoService } from '../../../../services/cita-gineco.service';
import { CitaObstService } from '../../../../services/cita-obst.service';

@Component({
  selector: 'app-show-paciente-cita',
  templateUrl: './show-paciente-cita.component.html',
  styleUrls: ['./show-paciente-cita.component.scss'],
})
export class ShowPacienteCitaComponent implements OnInit {
  constructor(
    public pacienteService: PacienteService,
    public ginecoService: CitaGinecoService,
    public obstService: CitaObstService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getCitas(this.pacienteId);
  }

  numeroG: number;
  numeroO: number;

  pacienteId: string = this.pacienteService.selectedPaciente._id;

  getCitas(pacienteId: string = this.pacienteId) {
    this.ginecoService.getCitasGineco(pacienteId).subscribe(
      (res) => {
        this.ginecoService.citasGineco = res;
        this.numeroG = this.ginecoService.citasGineco.length;
      },
      (err) => console.log(err)
    );
    this.obstService.getCitasObst(pacienteId).subscribe(
      (res) => {
        this.obstService.citasObst = res;
        this.numeroO = this.obstService.citasObst.length;
      },
      (err) => console.log(err)
    );
  }

  getCita(pacienteId: string, id : string, gestas?: number){
    if(gestas){
      this.obstService.getCitaObst(pacienteId, gestas, id).subscribe(
        res =>{
          this.obstService.selectedCitaObst = res
        },
        err => console.log(err)
      )
    }else{
      this.ginecoService.getCitaGineco(pacienteId, id).subscribe(
        res =>{
          this.ginecoService.selectedCitaGineco = res
        },
        err => console.log(err)
      )
    }
  }

  openSpecificCita(id: string, type: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = { id: id, type: type };

    if (type === 'gineco') {
      dialogConfig.width = '60%';
      dialogConfig.height = '80%';
    } else {
      dialogConfig.width = '100%';
      dialogConfig.height = '90%';
    }

    this.dialog.open(ShowSpecificCitaComponent, dialogConfig);
  }
}
