import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material'
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {

  // Test
  public order = {
    password: { name: "", price: ""},
    spyware: {name: "", price:""},
    memory: { name: "", price: ""},
    software: {name: "", price:""},
    tuneUp: { name: "", price: ""},
    cleanUp: {name: "", price:""},
    keyboard: { name: "", price: ""},
    labor: {name: "", price:""},
    parts: {info: ""},
    total: {amount: ""}
}
  constructor(public dialog: MatDialog) { }
  ngOnInit() { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const modalTest = this.dialog.open(InvoiceComponent)
    modalTest.componentInstance.order = this.order;
    // , {
    //   width:"80%",
    //   height:"80%",
    //   position: {'top': '0', 'left': '0'}
    // });

    }

  onSubmit(formData) {
    // console.log(formData);
    if (formData.serviceOrders.password) {
      this.order.password.name= "Password Reset";
      this.order.password.price= "39.99";
    }
    if (formData.serviceOrders.spyware) {
      this.order.spyware.name= "Spyware Removal";
      this.order.spyware.price= "99.99";
    }
    if (formData.serviceOrders.memory) {
      this.order.memory.name= "RAM Upgrade";
      this.order.memory.price= "129.99";
    }
    if (formData.serviceOrders.software) {
      this.order.software.name= "Software Installation";
      this.order.software.price= "49.99";
    }
    if (formData.serviceOrders.tuneUp) {
      this.order.tuneUp.name= "Tune-Up";
      this.order.tuneUp.price= "89.99";
    }
    if (formData.serviceOrders.cleanUp) {
      this.order.cleanUp.name= "Disk Clean-Up";
      this.order.cleanUp.price= "149.99";
    }
    if (formData.serviceOrders.keyboard) {
      this.order.keyboard.name= "Keyboard Cleaning";
      this.order.keyboard.price= "45.00";
    }
    if (formData.serviceOrders.labor) {
      this.order.labor.name= "Labor Costs @ $50/hr";
      const laborAmount = String(formData.serviceOrders.labor*50)
      this.order.labor.price= laborAmount;
    }
    this.openDialog();
    // this.totalPrice = this.keyboardPrice + this.laborPrice + this.keyboardPrice
  }
}
