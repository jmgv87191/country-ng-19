import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-country-search',
  imports: [],
  templateUrl: './country-search.component.html',
  styleUrl: './country-search.component.css'
})
export class CountrySearchComponent {

  placeholder = input()
  value = output<string>()





}

