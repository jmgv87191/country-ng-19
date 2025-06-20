import { Component, inject } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search/country-search.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countryService = inject( CountryService )

  onSearch( value: string ){

    this.countryService.searchByCapital( value ).subscribe((data)=>{
      console.log(data)
    })

  }



}
