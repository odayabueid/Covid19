import { Component, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnChanges {
  @Input() dataElement:any
  constructor() { }


  ngOnChanges(){
  }

}
