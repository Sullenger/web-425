/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 23 July 2019
; Modified By: Jason Sullenger
; Description: implementing child routes
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <div class="sellerContainer">
    <p>
    Slick Johnny's Totally Legal Chemical Distribution, Inc.<br> (888) 888-8888 <br> Seller ID: {{sellerId}}
    </p>
    </div>
  `,
  styles: [`
  .sellerContainer {
    background:#343a40;
    padding:20px;
    height:116px;
  }
  `]
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
