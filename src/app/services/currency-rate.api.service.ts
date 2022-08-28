import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Currency } from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateApiService {
  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

  constructor(private http: HttpClient) { }

  getBasicCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url)
  }
}
