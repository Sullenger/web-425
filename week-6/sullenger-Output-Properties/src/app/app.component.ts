/*
============================================
; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 13 August 2019
; Modified By: Jason Sullenger
; Description: Angular Output Properties
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iPrice-quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Output-Properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
