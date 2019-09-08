/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date: 08 September 2019
; Modified By: Jason Sullenger
; Description: Order form with invoice pop-up for Bob assignment
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { InvoiceComponent } from "../invoice/invoice.component";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent {
  totalAmount: number;

  public order = {
    password: { name: "", price: null },
    spyware: { name: "", price: null },
    memory: { name: "", price: null },
    software: { name: "", price: null },
    tuneUp: { name: "", price: null },
    cleanUp: { name: "", price: null },
    keyboard: { name: "", price: null },
    labor: { name: "", price: null },
    parts: { name: "", info: "" },
    total: { name: "", price: null }
  };
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const modalTest = this.dialog.open(InvoiceComponent, {
      width: "50%",
      height: "95%"
    });

    modalTest.componentInstance.order = this.order;
  }

  onSubmit(formData) {
    if (formData.serviceOrders.password) {
      this.order.password.name = "Password Reset";
      const passwordPrice = 39.99;
      this.order.password.price = passwordPrice;
    }
    if (formData.serviceOrders.spyware) {
      this.order.spyware.name = "Spyware Removal";
      const spywarePrice = 99.99;
      this.order.spyware.price = spywarePrice;
    }
    if (formData.serviceOrders.memory) {
      this.order.memory.name = "RAM Upgrade";
      this.order.memory.price = 129.99;
    }
    if (formData.serviceOrders.software) {
      this.order.software.name = "Software Installation";
      this.order.software.price = 49.99;
    }
    if (formData.serviceOrders.tuneUp) {
      this.order.tuneUp.name = "Tune-Up";
      this.order.tuneUp.price = 89.99;
    }
    if (formData.serviceOrders.cleanUp) {
      this.order.cleanUp.name = "Disk Clean-Up";
      this.order.cleanUp.price = 149.99;
    }
    if (formData.serviceOrders.keyboard) {
      this.order.keyboard.name = "Keyboard Cleaning";
      this.order.keyboard.price = 45.0;
    }
    if (formData.serviceOrders.labor) {
      this.order.labor.name = "Labor Costs @ $50/hr";
      const laborAmount = formData.serviceOrders.labor * 50;
      this.order.labor.price = laborAmount;
    }
    if (formData.serviceOrders.parts) {
      this.order.parts.name = "Additional Parts";
      this.order.parts.info = formData.serviceOrders.parts;
    }
    if (formData.serviceOrders) {
      this.order.total.name = "Total";
      this.order.total.price =
        this.order.password.price +
        this.order.spyware.price +
        this.order.memory.price +
        this.order.software.price +
        this.order.tuneUp.price +
        this.order.cleanUp.price +
        this.order.keyboard.price +
        this.order.labor.price;
    }
    this.openDialog();
  }
}
