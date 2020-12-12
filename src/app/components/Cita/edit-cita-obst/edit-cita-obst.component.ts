import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitaObstService } from 'src/app/services/cita-obst.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { CancelEditComponent } from '../../General/modals/cancel-edit/cancel-edit.component';


@Component({
  selector: 'app-edit-cita-obst',
  templateUrl: './edit-cita-obst.component.html',
  styleUrls: ['./edit-cita-obst.component.scss']
})
export class EditCitaObstComponent implements OnInit {

  constructor(
    public pacienteService: PacienteService,
    public citaObstService: CitaObstService,
    private snackBar : MatSnackBar,
    public dialog: MatDialog
  ) { }

  pacienteId : string = this.citaObstService.selectedCitaObst.pacienteId
  gestas: number = this.citaObstService.selectedCitaObst.gestas

  pesoA : number = this.citaObstService.selectedCitaObst.pesoAEmb
  altA : number = this.citaObstService.selectedCitaObst.altura

  pesoAument: number
  numEmb : number
  numeroCita : number
  meses: number
  semanas: number
  semDias: number
  dias: number
  conDias: number
  fProbable : Date
  imc1 : number
  imc2 : number

  ngOnInit(): void {
    this.getCitas(this.pacienteId, this.gestas)
    this.getPaciente(this.pacienteId)
    console.log(this.citaObstService.selectedCitaObst)
  }

  updateCitaObst(form: NgForm){
    this.citaObstService.updateCitaObst(form.value)
    .subscribe(
      res => {
        console.log(res)
        this.openSnackBar()
      },
      err => console.log(err)
    )
  }

  private getCitas( pacienteId : string, gestas : number){
    this.citaObstService.getCitasGes(pacienteId, gestas).subscribe(
      res => {
        this.citaObstService.citasObst = res
        this.getNumeroCita()
        this.seguimiento()
      }
    )
  }

  private getPaciente(id: string){
    this.pacienteService.getpaciente(id)
  }

  private getNumeroCita(){
    this.numeroCita = this.citaObstService.citasObst.length + 1
    this.citaObstService.selectedCitaObst.visita = this.numeroCita
  }

  private seguimiento(){
    if(this.numeroCita > 1){
      this.getDatos()
      this.compararFechas()
      this.fechaProbable()
      this.imc(
        this.citaObstService.selectedCitaObst.pesoAEmb,
        this.citaObstService.selectedCitaObst.altura,
        1
      )
      return
    }
  }

  private getDatos(){

    let citaObst = this.citaObstService.citasObst[0]
    let citaS = this.citaObstService.selectedCitaObst

    citaS.pesoAEmb = citaObst.pesoAEmb
    citaS.altura = citaObst.altura
    citaS.ultMenst = citaObst.ultMenst
    citaS.penMenst = citaObst.penMenst
    citaS.fechaEmb = citaObst.fechaEmb
  }

  compararFechas() {
    let fechaTime = Date.parse(this.citaObstService.selectedCitaObst.ultMenst);
    let dif: number = this.citaObstService.date - fechaTime;
    let dia: number = 86400000;

    this.comparador(dif, dia);
  }

  private comparador(dif: number, dia: number) {
    this.meses = this.citaObstService.calc(dif, dia * 30.4375);
    this.conDias = this.citaObstService.calc(dif, dia * 30.4375, dia);
    this.semanas = this.citaObstService.calc(dif, dia * 7);
    this.semDias = this.citaObstService.calc(dif, dia * 7, dia);
    this.dias = this.citaObstService.calc(dif, dia);
  }

  fechaProbable(){
    this.citaObstService.fechaProbable()
    this.fProbable = this.citaObstService.fProbable
  }

  imc(talla:number, pesoAntesEmb:number, number:number){
    switch (number) {
      case 1:
        this.imc1 = this.citaObstService.imcCalc(talla,pesoAntesEmb)
        break;

      case 2:
        this.imc1 = this.citaObstService.imcCalc(talla,pesoAntesEmb)
        break;

      default:
        this.imc1 = this.citaObstService.imcCalc(talla,pesoAntesEmb)
        this.imc2 = this.citaObstService.imcCalc(talla,pesoAntesEmb)
        break;
    }
  }

  aumentoPeso(){
    let peso1 : number = this.citaObstService.selectedCitaObst.pesoAEmb
    let peso2 : number = this.citaObstService.selectedCitaObst.exGenPeso

    this.pesoAument = peso2 - peso1
  }

  private openSnackBar() {
    this.snackBar.open('Cita Editada exitosamente', 'Cerrar', {
      duration: 4000
    })
  }

  openCancel(){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = false
    dialogConfig.width = "27%"
    dialogConfig.height = "32%"
    this.dialog.open(CancelEditComponent, dialogConfig)
  }

}
