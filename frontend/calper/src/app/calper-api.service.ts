import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class CalperApiService {
  URI: string = '';
  constructor(private http: HttpClient) {
    this.URI = 'https://dog.ceo/api/breeds/image/random';
  }

  getConsulta(){
    return this.http.get(this.URI);
  }
}
