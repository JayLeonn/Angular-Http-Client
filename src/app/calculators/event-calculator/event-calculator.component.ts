import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-calculator',
  templateUrl: './event-calculator.component.html',
  styleUrls: ['./event-calculator.component.css'],
})
export class EventCalculatorComponent implements OnInit {
  @Input() eventFig1: number = 10; // get value for this as an input from the parent
  @Output() eventFig1Change: EventEmitter<number> = new EventEmitter();
  @Input() eventFig2: number = 15; // get value for this as an input from the parent
  @Output() eventFig2Change: EventEmitter<number> = new EventEmitter();
  @Output() resultChange: EventEmitter<number> = new EventEmitter();

  calculatedResult: number = 0; //Can use this OR a getter

  constructor() {}

  ngOnInit(): void {
    this.resultChange.emit(this.result);
  }

  calculate(ev: any) {
    let id: string = ev.target.id;
    let value: number = Number(ev.target.value);
    if (id == 'eventFig1') {
      this.eventFig1 = value;
      this.eventFig1Change.emit(value);
    }
    if (id == 'eventFig2') {
      this.eventFig2 = value;
      this.eventFig2Change.emit(value);
    }
    this.resultChange.emit(this.result);
    this.calculatedResult = this.eventFig1 + this.eventFig2;
  }

  //Alternative solution to the calculatedResult variable (Notice: there is a difference in how they work though!)
  get result(): number {
    return this.eventFig1 + this.eventFig2;
  }
}
