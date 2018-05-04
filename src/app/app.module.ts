import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AlumnosComponent} from './alumno/alumnos.component';
import {AlumnoDetailComponent} from './alumno/almunodetail.component';
import { AppComponent } from './app.component';
import { AppRutasModule } from './apprutas.module';
import { MinsaitComponent } from './minsaitinfo.component';
import { FormsModule }    from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MinsaitComponent,
    AlumnoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
