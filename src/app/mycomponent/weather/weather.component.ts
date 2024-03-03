import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  date = new Date();
  cityTempData: any;
  constructor(private httpclientmodule: HttpClient) {
  }

  options: object = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dfdf202c8emsh74e867fef15dae7p1b8474jsn9bf2f2822963',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
    }, 1000)
  }


  myform: FormGroup = new FormGroup({
    cityname: new FormControl('', [Validators.required])
  });


  getCityTemp() {
    this.httpclientmodule.get("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + this.myform.value.cityname, this.options).subscribe((res: any) => {
      this.cityTempData = res;
      console.log(this.cityTempData);
    })
  }

}