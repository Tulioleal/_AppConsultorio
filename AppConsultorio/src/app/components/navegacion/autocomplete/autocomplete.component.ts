//Angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

//Components
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {

  nombres: string[] = [];
  apellidos: string[] = [];
  ids: string[] = [];
  nombresC: string[] = []
  dataArray: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  nombre: any[];

  paciente: any

  constructor(public pacienteService: PacienteService) {}
  private subs = new Subscription();
  ngOnInit() {
    this.subs.add(
      this.pacienteService.getPacientes().subscribe(
        res => {
          this.pacienteService.pacientes = res
          this.pacienteService.pacientes.map(valor => {
            this.nombres.push(valor.nombre)
            this.apellidos.push(valor.apellido)
            this.ids.push(valor._id)
            this.unirNombres(
              this.nombres,
              this.apellidos,
              this.nombresC
            )
          })
        },
        err => console.log(err)
      )
      );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map( value => this._filter(value))
    );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.nombresC.filter( options =>
      options.toLowerCase().includes(filterValue)
    );
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  getPaciente(id: string){
    this.pacienteService.getpaciente(id).subscribe(
      res => {
        this.pacienteService.selectedPaciente = res;
      },
      err => console.log(err)
    )
  }

  unirNombres(
    nombres: string[],
    apellidos: string[],
    nombresC: string[]
  ){
    for (let i = 0; i < nombres.length; i++) {
      nombresC[i] = `${nombres[i]} ${apellidos[i]}`
    }
  }

}
