import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { CalperApiService } from '../calper-api.service'
type jsonResponse = {
  message: string;
  status: string;
}
@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.page.html',
  styleUrls: ['./calculador.page.scss'],
})

export class CalculadorPage implements OnInit {
  message: string;
  status: string;

  constructor(private calperApi: CalperApiService) { }

  ngOnInit() {

  }
  calcular() {
    // console.log("Funciona!")
    this.calperApi.getConsulta()
      .subscribe(
        res => this.funciona(res),
        err => console.log(err)
      )
  }
  // extract(newObj) {
  //   console.log(newObj);
  //   this.message = newObj;
  //   console.log(this.message);
  // }
  funciona(res){
    console.log("La api responde:");
    console.log(res);
  }
}
