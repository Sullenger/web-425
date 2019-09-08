/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date: 08 September 2019
; Modified By: Jason Sullenger
; Description: Order form with invoice pop-up for Bob assignment
;===========================================
*/

import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { OrderComponent } from "../order/order.component";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  @Input() passwordOrder: boolean;
  @Input() passwordPrice: number;
  @Input() public order;

  constructor(private dialogRef: MatDialogRef<OrderComponent>) {}

  ngOnInit() {
    console.log(this.order);
  }

  close() {
    this.dialogRef.close();
    location.reload();
  }
}
