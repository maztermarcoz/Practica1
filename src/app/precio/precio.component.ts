import { Component, OnInit } from '@angular/core';
import { Precio } from './precio';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {
//Declaracion de arreglo de la clase Contacto
precio:any = [
  new Precio(1,'Normal',200.00),
  new Precio(2,'Premium',350.00),
  new Precio(3,'Deluxe',500.00),
  new Precio(4,'Estudiante',100.00)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
