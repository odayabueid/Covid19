import { Component, OnChanges,Input, EventEmitter, Output,OnInit} from '@angular/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnChanges {
@Input() allCountriesData:any
@Output() elementDetails = new EventEmitter();

  col_names:string[]=['Country','TotalConfirmed','TotalDeaths','TotalRecovered','NewConfirmed','NewDeaths','NewRecovered']
  title = 'COVID 19 Summary';
  searchText;
  elementObj;
  countrySelected:string=''
    constructor() { }




  ngOnChanges(){
    this.allCountriesData.sort((a,b)=>{
      return b.TotalConfirmed - a.TotalConfirmed
    })
    console.log(this.allCountriesData)
  }

  elementData(data){
    this.countrySelected = data.Country
    console.log(data.Country)
    this.elementObj = data
    this.elementDetails.emit(this.elementObj);
  }

}
