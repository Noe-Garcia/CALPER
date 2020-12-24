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
  ahorrosJson: any;
  constructor(private calperApi: CalperApiService) { }

  ngOnInit() {

  }
  // contruirJson(){

  //   console.log(this.ahorros);
  // }
  calcular() {
    this.ahorrosJson = JSON.stringify(this.ahorros);
    this.calperApi.postConsulta(this.ahorrosJson);

  }

  funciona(res){
    console.log("La api responde:");
    console.log(res);
  }
}
