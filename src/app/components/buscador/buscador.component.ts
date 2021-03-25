import { Component, OnInit } from '@angular/core';
import { ClimaServiceService } from 'src/app/services/clima-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  ciudad: string = '';
  temperatura: number;
  humedad: number;
  clima: string;
  loading: boolean = false;
  query: boolean = true;
  buscado: boolean = false;

  constructor(private climaService: ClimaServiceService) { }

  ngOnInit(): void {
    
  }

  buscarClima() {
    this.query = true;
    this.buscado = false;

    this.climaService.getClima(this.ciudad)
      .then(clima => {
        //console.log(clima);
        this.buscado = true;
        this.loading = false;
        this.temperatura = clima.main.temp - 273;
        this.humedad = clima.main.humidity;
        this.clima = clima.weather[0].main;
      })
      .catch(error => {
        this.query = false;
        this.loading = false;
        //console.log(error)
      });

  }

}
