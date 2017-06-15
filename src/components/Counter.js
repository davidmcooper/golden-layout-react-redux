import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

//const Counter = (props) => (
class Counter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      Counter: {this.props.count}
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }

}

/*
Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}
*/

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
