import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CountryDetailsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FusionChartsModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
