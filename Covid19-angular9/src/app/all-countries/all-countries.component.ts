import { Component, OnChanges,Input, EventEmitter, Output,OnInit} from '@angular/core';
// const nisPackage = require('../../package.json');

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
  countrySelected:string='';
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  // nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

    constructor() {     this.appendItems(0, this.sum);
    }

    addItems(startIndex, endIndex, _method) {
      for (let i = 0; i < this.sum; ++i) {
        this.array[_method]([i, ' '].join(''));
      }
    }
    
    appendItems(startIndex, endIndex) {
      this.addItems(startIndex, endIndex, 'push');
    }
    
    prependItems(startIndex, endIndex) {
      this.addItems(startIndex, endIndex, 'unshift');
    }
  
    onScrollDown () {
      console.log('scrolled down!!');
  
      // add another 20 items
      const start = this.sum;
      this.sum += 20;
      this.appendItems(start, this.sum);
      
      this.direction = 'down'
    }
    

     onScroll(){
      console.log("Ssssssssssssssssssaaaaaaaaaaaaa")
    }
  


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
