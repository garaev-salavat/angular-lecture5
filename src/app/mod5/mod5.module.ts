import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod5Component } from './mod5.component';



@NgModule({
  declarations: [Mod5Component],
  imports: [
    CommonModule
  ],
  exports: [Mod5Component]
})
export class Mod5Module { }
