/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 17 July 2019
; Modified By: Jason Sullenger
; Description: Angular routing
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component'


const routes: Routes = [
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent]
