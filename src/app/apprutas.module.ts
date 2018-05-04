import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AlumnosComponent} from './alumno/alumnos.component';
import { MinsaitComponent } from './minsaitinfo.component';
import { AppComponent } from './app.component';
import { AlumnoDetailComponent } from './alumno/almunodetail.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'minsait', component: MinsaitComponent },
  { path: 'alumno/:id', component: AlumnoDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRutasModule {}


