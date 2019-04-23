import { Component, OnInit } from '@angular/core';

import { CountryService } from '../country.service'

import { Country } from '../class'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  availableCountries: Country[];
  selectedCountry: Country;

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.availableCountries = countries);
  }


  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    this.onSelect(this.availableCountries[0]);
  }

}
