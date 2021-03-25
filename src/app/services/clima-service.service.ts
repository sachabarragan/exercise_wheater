import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {

  url: string = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key: string = '0206a403d052a3baefe16bb6ebd0e9d1';
  climaCiudad: any;

  constructor(public _http: HttpClient) { }

  ngOnInit(): void{

  }
  
  getClima(ciudad: string): Promise<any> {
    
    return this._http.get<any>(`${this.url}${this.key}&q=${ciudad}`).toPromise();
  }
}


