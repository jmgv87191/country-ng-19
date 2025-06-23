import { Component, input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent  {


  countries = input.required<Country[]>()



}
