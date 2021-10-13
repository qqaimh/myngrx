import { Action, createReducer, on } from "@ngrx/store";

import { decrement, increment, reset } from "./counter.actions";

export const initialCounterState = 0;

const _counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
)

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}