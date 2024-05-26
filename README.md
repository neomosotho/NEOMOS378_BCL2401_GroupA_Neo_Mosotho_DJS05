# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## Overview
This project demonstrates the creation of a simple Tally App using a Redux-inspired store to manage its state. The core functionalities include incrementing, decrementing, and resetting a counter. Instead of rendering changes on a UI, the app logs them to the console to effectively demonstrate state management.

## Objective
The primary objective is to build a minimalistic, Redux-inspired store that handles and logs state changes of a counting Tally App. This exercise aims to illustrate the power and flexibility of state management in applications.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements
- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## Features
Increment Counter: Increase the count by 1.
Decrement Counter: Decrease the count by 1.
Reset Counter: Reset the count to 0.
State Logging: Log state changes to the console for visibility.

## Challenges
I experienced challenges whereby the state counts were not displaying in the order that they should have. But I managed to fix that. 

## Running of the code
So intead of running the code in the live server on the console, I added a file called 'package.json'. This file enables me to read my console in the terminal, which is easier and quicker.
