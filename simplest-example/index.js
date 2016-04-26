// @link: https://github.com/jackielii/simplest-redux-example/blob/master/index.js
// to understand react redux better

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action ) {
  let count = state.count;
  switch( action.type ) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
let store = createStore( counter )

// Map redux state to component props
function mapStateToProps( state ){
  return {
    value: state.count
  }
}

// Map redux actions to component props
function mapDispatchToProps( dispatch ){
  return {
    onIncreaseClick: () => dispatch( increaseAction )
  }
}

// Connected component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById( 'root' )
)