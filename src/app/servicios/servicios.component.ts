import { Component, OnInit } from '@angular/core';
import { Servicios } from './servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {
    //Declaracion de arreglo de la clase Servicios
    servicios:any = [
      new Servicios(5,'Marcos' ,'Doc Palomo'),
      new Servicios(2, 'Grisel', 'Doc Benazio'),
      new Servicios(9, 'Sally', 'Doctor Chipo')
  
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
