
import { initialState } from './initialState.js';
import { action } from './action.js';

export function reducer (state = initialState, actions) {
    switch (actions, type) {
        case action.INCREMENT:
            return {count: state.count + 1};
        case action.DECREMENT:
            return {count: state.count - 1};
        case action.RESET:
            return {count: 0};
            default:
                return state;    
    }
}

