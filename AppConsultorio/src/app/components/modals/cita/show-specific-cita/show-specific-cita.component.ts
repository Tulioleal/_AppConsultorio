import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitaGinecoService } from 'src/app/services/cita-gineco.service';
import { CitaObstService } from 'src/app/services/cita-obst.service';

@Component({
  selector: 'app-show-specific-cita',
  templateUrl: './show-specific-cita.component.html',
  styleUrls: ['./show-specific-cita.component.scss']
})
export class ShowSpecificCitaComponent implements OnInit {

  constructor(
    public ginecoService : CitaGinecoService,
    public obstService : CitaObstService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
