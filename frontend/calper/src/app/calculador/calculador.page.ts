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

  constructor(private calperApi: CalperApiService){}
  ngOnInit() {

  }
  // contruirJson(){

  //   console.log(this.ahorros);
  // }
  calcular() {
    console.log(this.ahorros);
    this.calperApi.getConsulta()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
