import { Component, OnInit } from '@angular/core';
import { Horario } from './horario';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  //Declaracion de arreglo de la clase Horario
  horario:any = [
    new Horario('Lunes','De 2Pm a 10 Pm'),
    new Horario('Miercoles', 'De 11Am a 8 Pm'),
    new Horario('Viernes', 'De 12Pm a 8 Pm'),
    new Horario('Sabado', 'De 12Pm a 4 Pm')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}



