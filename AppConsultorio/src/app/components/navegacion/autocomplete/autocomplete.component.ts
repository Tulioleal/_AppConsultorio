import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PacienteService } from '../../../services/paciente.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  options: string[] = [];
  dataArray: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  nombre: any[];
  constructor(private pacienteService: PacienteService) {}
  private subs = new Subscription();
  ngOnInit() {
    this.subs.add(
      this.pacienteService.getPacientes().subscribe(
        (data) => {
          const nombre = data.map((data) => data.nombre);
          this.options = nombre;
          console.log('Nombre: ', this.nombre);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    );
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  // Filter must be declared after ngOnInit().
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((options) =>
      options.toLowerCase().includes(filterValue)
    );
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
