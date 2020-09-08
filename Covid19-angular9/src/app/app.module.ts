import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { FusionChartsModule } from 'angular-fusioncharts';
// import * as FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { CountryDetailsComponent } from './country-details/country-details.component';
// Add other dependecies like Charts, PowerCharts, Widgets, Maps
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import Maps from 'fusioncharts/fusioncharts.maps';
// import World from 'fusioncharts/maps/fusioncharts.world';



// Use fcRoot function to inject FusionCharts library, and the modules 
// you want to use
//FusionChartsModule.fcRoot(FusionCharts, [Comma separated charts and features]) 
FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    FusionChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
