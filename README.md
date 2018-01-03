# React + Redux App

This is basic example of a counter app that uses React + Redux.
The Source code was generated via [create-react-app](https://github.com/facebookincubator/create-react-app)

### 7 Steps to integrate Redux
1. Import and use currying connect() from 'react-redux'
  a. ```import { connect } from 'react-redux'```
  b. ```connect(mapStateToProps)(Counter)```
2. Map State to Props
  a. create ```mapStateToProps``` function
  b. pass it to ```connect(mapStateToProps)```
3. Create Redux store
  a. ```import { createStore } from 'redux'```
  b. ```const store = createStore()```
4. Integrate Store to Provider
  a. ```import { Provider } from 'react-redux'```
  b. Wrap the ```Counter``` with ```Provider``` Component and pass ```store``` props
5. Create Reducer function and integrate to Redux store
  a. Add initial state for the ```reducer``` function
  b. Pass ```reducer``` to ```createStore```
6. Add Actions inside the Reducer
  a. ```Actions``` requires ```type``` attribute
  b. ```connect()``` injects ```dispatch()``` as a prop to the component
7. Use the Actions on the component via props
  a. ```this.props.dispatch({type: "INCREMENT"})```
  b. ```this.props.dispatch({type: "DECREMENT"})```

# License

MIT
