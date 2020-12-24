import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { CalperApiService } from '../calper-api.service'

type Response={
  ahorros: string;
  inflacionPronosticada:string;
  valorInvirtiendoEnCetes:string;
  valorReal:string;

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.page.html',
  styleUrls: ['./calculador.page.scss'],
})
export class CalculadorPage implements OnInit {

  ahorros:number;
  response: any;
  responses:any=[];
  constructor(private calperApi: CalperApiService){}
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
      res => this.saveRes(res),
      err => console.log(err)
    )
  }
  saveRes(res){
    res = this.response;
    console.log(res);
    this.responses = res;
  }

    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
