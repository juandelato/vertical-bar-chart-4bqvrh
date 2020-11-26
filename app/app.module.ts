import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { CustomLinerChartService } from './CustomLinerChartService';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
],
providers: [ CustomLinerChartService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
