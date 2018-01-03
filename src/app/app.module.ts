import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { HighchartComponent } from './highchart/highchart.component';


@NgModule({
  declarations: [
    GraphComponent,
    AppComponent,
    SHARED_VISUALS,
    D3_DIRECTIVES,
    HighchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [WeatherService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
