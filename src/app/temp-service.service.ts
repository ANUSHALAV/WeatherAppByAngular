import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  constructor() { }


  getTempData(cityname:string){
    console.log(cityname);
    
  }
}
