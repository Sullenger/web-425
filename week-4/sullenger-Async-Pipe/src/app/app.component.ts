/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 02 August 2019
; Modified By: Jason Sullenger
; Description: asynchronous pipes and observable arrays
;===========================================
*/

import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';


@Component({
  selector: 'app-root',
  template: `
  <div class="container alignCenter">
    <div class="row">
      <h2>Sully's Stocked Fruit</h2>
      <table class="table table-striped table-info">
        <thead class="tbl-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (per/lb)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let fruit of fruitArray | async">
            <td>{{fruit.id}}</td>
            <td>{{fruit.name}}</td>
            <td>{{fruit.pricePerPound}}</td>
            <td>{{fruit.quantity}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sullenger-Async-Pipe';
  fruitArray: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruitArray = this.fruitService.getFruit();
  }
}
