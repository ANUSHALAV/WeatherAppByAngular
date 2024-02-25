import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  date = new Date();
  constructor() {
  }


  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
    }, 1000)
  }


}
