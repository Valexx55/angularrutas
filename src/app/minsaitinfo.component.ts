import { Component } from '@angular/core';

@Component({
  selector: 'minsait',
  templateUrl: './minsaitinfo.component.html'
})
export class MinsaitComponent {
  ruta_foto : string;
  static readonly RUTA : string = 'assets/minsait.jpg';

  constructor()
  {
    this.ruta_foto = MinsaitComponent.RUTA;
  }

}