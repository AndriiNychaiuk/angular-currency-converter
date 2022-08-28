import { Component, OnInit } from '@angular/core';
import { CurrencyRateApiService } from '../services/currency-rate.api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: string = 'loading...';
  eurRate: string = 'loading...';
  date: Date | undefined;

  constructor(private currencyService: CurrencyRateApiService) { }

  ngOnInit(): void {
    this.currencyService.getBasicCurrency().subscribe(rates => {
      const usd = rates.find(currency => currency.cc === 'USD')?.rate
      const eur = rates.find(currency => currency.cc === 'EUR')?.rate

      this.usdRate = `1 USD = ${usd?.toFixed(2)} UAH` || '';
      this.eurRate = `1 EUR = ${eur?.toFixed(2)} UAH` || '';
      this.date = new Date();
      this.date.setDate(this.date.getDate())
    })
  }
}
