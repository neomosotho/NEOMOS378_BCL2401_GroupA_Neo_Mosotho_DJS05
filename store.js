//Exporting createStore function
export function createStore(reducer) {
    let state = reducer(undefined, {});
    const listeners = [];

    return {
        dispatch(action) {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        },
        getState() {
            return state;
        },
        subscribe(listener) {
            listeners.push(listener);
            return() => {
                const index = listeners.indexof(listener);
                listeners.splice(index, 1);
            };
        },    
    };
}
