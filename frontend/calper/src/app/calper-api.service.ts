import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class CalperApiService {

  URI: string = '';
  constructor(private http: HttpClient) {
    this.URI = 'http://localhost:5000/calculo';
  }
  jsonResponse;
  postConsulta(ahorros:JSON){
    return this.http.post(this.URI, ahorros).toPromise().
    then((res:any) => {
      console.log(res);
      console.log(JSON.stringify(res.json))
    });
  }
}
