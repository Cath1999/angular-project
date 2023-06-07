import { Component } from '@angular/core';
import { Muestra } from './interface/muestra';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent {
  public muestras: Muestra[] = [];
}
