import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {

  verdanaFont:boolean = true;

  verdanaClass: object = { 'verdana-font':true };

  constructor() {}

  ngOnInit(): void {}
}