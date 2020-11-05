
import { PropertyBindingType } from '@angular/compiler';
import { Action, createAction, props, createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

enum ActionTypes {
    Increment = "Increment",
    Decrement = "Decrement"
}

export const decrement = createAction(
    ActionTypes.Decrement
)

export const increment = createAction(
    ActionTypes.Increment
)

const INITIAL_STATE = {
    counter: 0,
}

export const counterReducer = createReducer(
    INITIAL_STATE,
    on(increment, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, state => ({
        ...state,
        counter: state.counter - 1
    }))
)
