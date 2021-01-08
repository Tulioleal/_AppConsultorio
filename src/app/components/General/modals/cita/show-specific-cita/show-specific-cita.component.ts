//Angular
import { Component, Inject, DoCheck } from '@angular/core';

//Material
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

//Components
import { DeleteComponent } from '../../../../General/modals/delete/delete.component';
import { ShowPacienteCitaComponent } from '.././../cita/show-paciente-cita/show-paciente-cita.component'

//Services
import { CitaGinecoService } from '../../../../../services/cita-gineco.service';
import { CitaObstService } from '../../../../../services/cita-obst.service';
import { PacienteService } from '../../../../../services/paciente.service'

@Component({
  selector: 'app-show-specific-cita',
  templateUrl: './show-specific-cita.component.html',
  styleUrls: ['./show-specific-cita.component.scss'],
})
export class ShowSpecificCitaComponent implements DoCheck {
  meses: number;
  semanas: number;
  conDias: number;
  semDias: number;
  dias: number;

  imc1: number;
  imc2: number;

  constructor(
    public ginecoService: CitaGinecoService,
    public obstService: CitaObstService,
    public dialog: MatDialog,
    public pacienteService: PacienteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  ngDoCheck(): void {
    switch (this.data.type) {

      case 'gineco':
        break;

      case 'obst':
        this.compararFechas();
        this.imc();

      default:
        break;
    }
  }

  private compararFechas() {
    let fechaTime = Date.parse(this.obstService.selectedCitaObst.ultMenst);
    let dif: number = this.obstService.date - fechaTime;
    let dia: number = 86400000;

    this.comparador(dif, dia);
    this.obstService.fechaProbable();
  }

  private comparador(dif: number, dia: number) {
    this.meses = this.obstService.calc(dif, dia * 30.4375);
    this.conDias = this.obstService.calc(dif, dia * 30.4375, dia);
    this.semanas = this.obstService.calc(dif, dia * 7);
    this.semDias = this.obstService.calc(dif, dia * 7, dia);
    this.dias = this.obstService.calc(dif, dia);
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
    this.dialog.open(DeleteComponent, dialogConfig);
  }

  openShowPacienteCitas(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '60%';
    dialogConfig.height = '80%';
    dialogConfig.data = { id: id };
    this.dialog.open(ShowPacienteCitaComponent, dialogConfig);
  }

  private imc() {
    const citaS = this.obstService.selectedCitaObst;

    this.imc1 = this.obstService.imcCalc(citaS.pesoAEmb, citaS.altura);
    this.imc2 = this.obstService.imcCalc(citaS.exGenPeso, citaS.exGenAlt);
  }

}
