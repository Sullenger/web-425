/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 01 August 2019
; Modified By: Jason Sullenger
; Description: Inversion of Control and Dependency Injection
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit (3, "Apple", "Green")
  }
}
