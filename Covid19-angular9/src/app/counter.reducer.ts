import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset,name } from './counter.actions';

// export const initialState = 0;
export const initialState = {
  count: 0,
  name: "oday",
};
const _counterReducer = createReducer(
  initialState,
  // on(increment, (state) =>( state + 1)),
  // on(decrement,  (state) => ( state - 1)),
  // on(reset,  (state) => (state=0))

  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement,  state => ({ ...state, count: state.count - 1 })),
  on(reset,  state => ({ ...state, count:0})),
  on(name,(state,action) =>({
    ...state,name:state.name + action.value
  }))
);

export function counterReducer(state,action){
  return _counterReducer(state,action)
}