import { decrement, increment, counterReducer } from './../ngrx';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private counter$: Observable<any>

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  increment() {
    timer(1000)
      .subscribe(() => {
        this.store.dispatch(
          increment()
        )
      })
  }
  decrement() {
    timer(1000).subscribe(() => {
      this.store.dispatch(decrement())
    })
  }

}
