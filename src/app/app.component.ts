import { map, Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  observableDemo: Observable<number> = new Observable((o) => {
    console.log('Observable starts');
    setTimeout(() => {
      o.next(1);
    }, 1000);
    setTimeout(() => {
      o.next(2);
    }, 2000);
    setTimeout(() => {
      o.next(3);
    }, 3000);
    setTimeout(() => {
      o.error(new Error('Error in observable!'));
    }, 4000);
    setTimeout(() => {
      // Notice, we never make it here after an error
      o.next(5);
    }, 5000);
  });

  ngOnInit(): void {
/*     this.observableDemo.pipe(map((val: number) => val * 2)).subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        alert(err.message);
      },
    }); */
  }
}
