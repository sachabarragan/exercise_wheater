import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  @Input() temperatura: number = 0;
  @Input() humedad: number = 0;
  @Input() clima: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
