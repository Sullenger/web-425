/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 13 August 2019
; Modified By: Jason Sullenger
; Description: Angular Output Properties
;===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD'}}
    </strong>
  `,
  styles: [`
    :host { background-color: yellow; border-radius: 2px;}
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote:PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data=> {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };
        this.lastPrice.emit(this.priceQuote);
      });

   }

  ngOnInit() {
  }

}
