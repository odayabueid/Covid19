import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
   }

   increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }
 
  decrement() {
    this.store.dispatch(decrement());

    // TODO: Dispatch a decrement action
  }
 
  reset() {
    this.store.dispatch(reset());

    // TODO: Dispatch a reset action
  }

}
