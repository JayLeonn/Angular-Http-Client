import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit, DoCheck {
  @Input() fig1: number = 10;
  @Input() fig2: number = 15;

  @Output() resultChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.resultChange.emit(this.fig1 + this.fig2);
  }
}
