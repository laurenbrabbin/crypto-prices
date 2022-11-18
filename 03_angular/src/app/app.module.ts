import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PriceTableComponent } from './price-table/price-table.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceDisplayComponent,
    LineChartComponent,
    PriceTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
