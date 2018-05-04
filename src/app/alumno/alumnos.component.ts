import {Alumno} from './alumno.model';
import {AlumnoService} from './alumno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lalumnos',
  templateUrl: './alumnos.component.html',
  providers:[AlumnoService],
  styleUrls: ['./alumnos.style.css']
})
export class AlumnosComponent implements OnInit{
  lista_alumnos : Alumno[];

  constructor(private alumno_service: AlumnoService)
  {
    console.log ("Entra en constructor AlumnosComponent");
    this.lista_alumnos = alumno_service.getAlumnos();
  }

  ngOnInit ()
  {
    console.log ("Entra en init AlumnosComponent");
    this.lista_alumnos = this.alumno_service.getAlumnos();
  }
}
