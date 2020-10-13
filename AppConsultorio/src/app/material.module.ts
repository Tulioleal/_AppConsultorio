// Core
import { NgModule } from '@angular/core'

// Components
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  imports:[
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports:[
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})

export class MaterialModules{}
