import React, { Component } from 'react'
import ReactDOM from 'react-dom';
//import {incrementCount} from '../ActionCreators';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { increment, decrement } from '../actions/counter'

class IncrementButton extends Component {
    render() {
        return (
            <div>
                Counter: {this.props.count}
                <button onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

/*
    // <button onClick={() => this.props.incrementCount()}>Increment Count</button>
    IncrementButton.PropTypes = {
        incrementCount: PropTypes.func.isRequired
    }

    function mapDispatchToProps(dispatch) {
        return {
            incrementCount: () => dispatch(incrementCount())
        };
    }
*/

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export const IncrementButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IncrementButton);
