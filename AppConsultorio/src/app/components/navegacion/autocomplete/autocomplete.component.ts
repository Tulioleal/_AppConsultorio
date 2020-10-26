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
export class AutocompleteComponent implements OnInit, OnDestroy {

  options: string[] = [];
  ids: string[] = []
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
        (data) => {
          const nombre = data.map((data) => `${data.apellido} ${data.nombre}`);
          const id = data.map( data => data._id)
          this.options = nombre;
          this.ids = id
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map( value => this._filter(value))
    );
  }
  // Filter must be declared after ngOnInit().
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter( options =>
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
}
