import { Component,Input,OnChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http'


  

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input() elementDetails:any

  title = 'myapp';
  globalData:any={};
  allCountriesData:any=[];
  dataElement;
  modalOpen=false
  mostDangerousCountries:any=[];
  dataSource: Object;
  array=[]
  throttle = 300;
  scrollDistance = 1;
  sum = 50
  constructor(public http:HttpClient){
    this.test()
    this.http.get('https://api.covid19api.com/summary').subscribe((value:any)=>{
      this.globalData = value.Global;
      this.allCountriesData = value.Countries
      // console.log(this.allCountriesData,'ss')
      this.allCountriesData.sort((a,b)=>{
        return b.TotalConfirmed - a.TotalConfirmed
      })
      this.allCountriesData.forEach((element,index) => {
        if(index < 5){
          this.mostDangerousCountries.push({
            "id": index,
            "value": element.TotalConfirmed,
            "label":element.Country,
            "showLabel": "1",
          })
        }
      });

    })
 
    this.dataSource = {
      "chart": {
      "caption": "Top 5 countries in the spread of Coronavirus",
      "subcaption": "March 2020 -present",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
      },
      // Aesthetics; ranges synced with the slider
      // Source data as JSON --> id represents countries of the world.
      "data": this.mostDangerousCountries
      };
  }
  test(){
    for(var i = 0 ; i<this.sum ; i++){
      this.array.push(i)
    }
  }
  ngOnChanges(){
    
    console.log(this.elementDetails,"elementDetailselementDetails")
  }
  showResults(details){
    this.dataElement=details
  }
  onScroll(){
    if(this.sum < 300){
    this.sum = this.sum + 50
    this.test()
    console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY")
  }
  }
 
}
const dataset = [{
  "id": "NA",
  "value": ".82",
  "showLabel": "1"
  }, {
  "id": "SA",
  "value": "2.04",
  "showLabel": "1"
  }, {
  "id": "AS",
  "value": "1.78",
  "showLabel": "1"
  }, {
  "id": "EU",
  "value": ".40",
  "showLabel": "1"
  }, {
  "id": "AF",
  "value": "2.58",
  "showLabel": "1"
  }, {
  "id": "AU",
  "value": "1.30",
  "showLabel": "1"
  }];