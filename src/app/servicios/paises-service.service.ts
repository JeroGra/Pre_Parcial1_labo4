import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  url =  "https://restcountries.com/v3.1/all";

  constructor(private http : HttpClient) { }

  TraerPaises()
  {
    return this.http.get(this.url);
  }
}
