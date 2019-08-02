/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 02 August 2019
; Modified By: Jason Sullenger
; Description: asynchronous pipes and observable arrays
;===========================================
*/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fruit } from "./fruit";


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruitArray: Fruit[] = [
    {id:11, name:"Apple", pricePerPound:"1.99", quantity:60},
    {id:22, name:"Banana", pricePerPound:".99", quantity:110},
    {id:33, name:"Pear", pricePerPound:"1.50", quantity:30},
    {id:44, name:"Orange", pricePerPound:"1.25", quantity:80},
    {id:55, name:"Kiwi", pricePerPound:"2.50", quantity:20},
  ]

  constructor() { }

  getFruit(): Observable<Fruit[]> {
    return of(this.fruitArray);
  }
}
