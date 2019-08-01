/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 01 August 2019
; Modified By: Jason Sullenger
; Description: Inversion of Control and Dependency Injection
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {  Fruit } from "./fruit";
import { FruitService } from "./fruit.service"

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
  <div class="row">
    <h2>Fruit Details</h2>
    <table class="table table-hover table-striped">
      <thead class="customHeader">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{fruit.id}}</td>
          <td>{{fruit.name}}</td>
          <td>{{fruit.color}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: [`
  .customHeader {
    background-color: grey;
  }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
