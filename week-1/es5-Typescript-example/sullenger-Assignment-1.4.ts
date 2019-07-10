/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 09 July 2019
; Modified By: Jason Sullenger
; Description: Building an angular app without angular CLI
;===========================================
*/

let firstName: string = "Jason";
let lastName: string = "Sullenger";

function whoIsThis(one: string, two: string): string {
    return "Welcome back " + one + " " + two + "!";
}

console.log(whoIsThis(firstName, lastName))