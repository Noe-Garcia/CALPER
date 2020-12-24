import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { CalperApiService } from '../calper-api.service'

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.page.html',
  styleUrls: ['./calculador.page.scss'],
})

export class CalculadorPage implements OnInit {
  ahorros:number;
  json: object;

  constructor(private calperApi: CalperApiService) { }

  ngOnInit() {

  }
  // contruirJson(){

  //   console.log(this.ahorros);
  // }
  calcular() {
    // this.contruirJson();
    console.log("Funciona!")
    this.calperApi.postConsulta(this.ahorros);

  }

  funciona(res){
    console.log("La api responde:");
    console.log(res);
  }
}
