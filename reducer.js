//Importing 'initalState' and 'action'
import { initialState } from './initialState.js';
import { action } from './action.js';

//Exporting reducer function
export function reducer (state = initialState, actions) {
    switch (actions, type) {
        case action.Increment:
            return {count: state.count + 1};
        case action.Decrement:
            return {count: state.count - 1};
        case action.Reset:
            return {count: 0};
            default:
                return state;    
    }
}

