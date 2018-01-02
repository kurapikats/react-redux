import React, { Component } from 'react';
// 3a : the redux store
import { createStore } from 'redux'
// 4a : provider: is used to integrate the store to the app (counter)
import { Provider } from 'react-redux'

import Counter from './Counter'

// 5a : create a reducer function
// reducer is the initial state for redux
const initialState = {
  count: 0
}
function reducer(state = initialState, action) {
  // 6a: add actions, these can be called via store.dispatch()
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    // always have a default in place
    default:
      return state
  }
}

// 3b : create the redux store
// 5b : createStore expects a reducer function param
// store has a dispatch function
// dispatch requires a 'type' property
const store = createStore(reducer)

const App = () => (
  // 4b: pass the redux store to provider
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default App;
