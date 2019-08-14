/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 13 August 2019
; Modified By: Jason Sullenger
; Description: Material Design input properties
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: [`
    :host { background: grey; text-align: center; };
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
