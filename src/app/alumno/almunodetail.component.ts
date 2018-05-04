import {AlumnoService} from './alumno.service';
import {Alumno} from './alumno.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'lalumnos',
  templateUrl: './almunodetail.component.html',
  providers: [AlumnoService]
})
export class AlumnoDetailComponent implements OnInit {
    alumno_selected: Alumno;
    private ultimo_id : number;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private alumno_service: AlumnoService
    ) {}
  
    ngOnInit(): void {
      console.log ("Entra en init AlumnosDetailComponent");
      let ids : string  = this.route.snapshot.paramMap.get('id');
      let idn = +ids; //casting de string a número: toque toque!
      this.alumno_selected = this.alumno_service.getAlumnos()[idn];
      this.ultimo_id = idn;
    }
  
    atras(): void {
      this.location.back(); 
    }

}
