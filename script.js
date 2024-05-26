//Importing 'reducer' and 'action' files
import { action } from './action.js';
import { reducer } from './reducer.js';
import { createStore } from './store.js';

// creating the store
const store = createStore(reducer);

//console.loging Scenario 1
console.log('Scenario 1: Initial State Verification');
console.log(store.getState()); 

//console.loging Scenario 2
console.log('Scenario 2: Incrementing the counter');
store.dispatch({ type: action.Increment });
store.dispatch({type: action.Increment});
console.log(store.getState());

//console.loging Scenario 3
console.log('scenario 3 Decrementing the Counter');
store.dispatch({ type: action.Decrement});
console.log(store.getState());

// console.logging Scenario 4
console.log('Scenario 4: Resetting the counter');
store.dispatch({type: action.Reset});
console.log(store.getState());
