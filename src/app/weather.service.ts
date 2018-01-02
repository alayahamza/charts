import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=724605c89441260c5d09f3f3e01b4c41")
      .map(result => result);
  }


}
