import { Injectable } from '@angular/core';
import { Alumno } from './alumno.model';

@Injectable()
export class AlumnoService {


    static lista_alumnos: Alumno[] = [
        { nombre: 'Juan', edad: 18, nota: 7 },
        { nombre: 'Vale', edad: 20, nota: 10 }
    ];

    constructor() { 
        console.log ("Entra en constructor servicio");
    }


    static mostrarArrayAlumnos ():void
    {
        console.log ("Mostrando ...");
        for (let al of AlumnoService.lista_alumnos) {
            console.log(al.nombre);
            console.log(al.edad);
            console.log(al.nota);
        } 
    }

    getAlumnos(): Alumno[] {
        AlumnoService.mostrarArrayAlumnos ();
        return AlumnoService.lista_alumnos;
    }

    
}