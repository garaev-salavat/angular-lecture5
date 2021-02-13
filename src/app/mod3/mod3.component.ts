import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod3',
  templateUrl: './mod3.component.html',
  styleUrls: ['./mod3.component.css']
})
export class Mod3Component implements OnInit {

  condition: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.condition = !this.condition;
  }

}
