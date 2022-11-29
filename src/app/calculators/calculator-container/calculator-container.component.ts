import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.css'],
})
export class CalculatorContainerComponent implements OnInit {
  parentFig1: number = 10;
  parentFig2: number = 15;
  parentResult: number = 0;

  calcResult: number = 0;

  selected: string = 'binding'; //default selection

  constructor() {}

  ngOnInit(): void {}
}
