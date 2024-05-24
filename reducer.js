import { initialState } from "./initialState";
import { action } from "./action";

export function reducer (state = initialState, action) {
    switch (action, type) {
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

