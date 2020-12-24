import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { CalperApiService } from '../calper-api.service'
<<<<<<< Updated upstream
type jsonResponse = {
  message: string;
  status: string;
=======
type Response={
  ahorros: string;
  inflacionPronosticada:string;
  valorInvirtiendoEnCetes:string;
  valorReal:string;
>>>>>>> Stashed changes
}
@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.page.html',
  styleUrls: ['./calculador.page.scss'],
})
export class CalculadorPage implements OnInit {
<<<<<<< Updated upstream
  message: string;
  status: string;

  constructor(private calperApi: CalperApiService) { }

=======
  ahorros:number;
  response: any;
  responses:any=[];
  constructor(private calperApi: CalperApiService){}
>>>>>>> Stashed changes
  ngOnInit() {
  }
  calcular() {
    // console.log("Funciona!")
    this.calperApi.getConsulta()
<<<<<<< Updated upstream
      .subscribe(
        res => this.extract(res.toString),
        err => console.log(err)
      )
  }
  extract(newObj) {
    console.log(newObj);
    this.message = newObj;
    console.log(this.message);
  }
=======
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
>>>>>>> Stashed changes
}
