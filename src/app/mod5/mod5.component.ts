import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod5',
  templateUrl: './mod5.component.html',
  styleUrls: ['./mod5.component.css']
})
export class Mod5Component implements OnInit {

  count:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  increment():void {
    this.count++;
  }

  decrement():void {
    this.count--;
  }

}
