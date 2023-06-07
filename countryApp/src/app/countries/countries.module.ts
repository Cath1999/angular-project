import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';



@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountriesTableComponent,
    CountryPageComponent
  ],
  providers: [],
})
export class CountriesModule { }
