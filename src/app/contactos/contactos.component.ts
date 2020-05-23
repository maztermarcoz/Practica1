import { Component, OnInit } from '@angular/core';
import { Contactos } from './contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  //Declaracion de arreglo de la clase Contacto
  contactos:any = [
    new Contactos(1,'Marcos'),
    new Contactos(2, 'Grisel'),
    new Contactos(3, 'Sally')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
