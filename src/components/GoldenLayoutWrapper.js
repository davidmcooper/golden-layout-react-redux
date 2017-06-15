import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import GoldenLayout from 'golden-layout';
import PropTypes from 'prop-types'
import {Provider} from 'react-redux';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'
import {IncrementButtonContainer} from './IncrementButton';

class GoldenLayoutWrapper extends Component {

  constructor(props,context) {
    super(props,context)
  }

  componentDidMount() {

    // Build basic golden-layout config
    const config = {
      content: [{
        type: 'row',
        content: [
          { type: 'react-component',  component: 'IncrementButtonContainer' }
        ]
      }]
    };

    function wrapComponent(Component, store) {
      class Wrapped extends React.Component {
        render() {
          return (
            <Provider store={store}>
              <Component {...this.props}/>
            </Provider>
          );
        }
      }
      return Wrapped;
    };

    var layout = new GoldenLayout(config, '#goldenLayout');

    layout.registerComponent('IncrementButtonContainer', 
      wrapComponent(IncrementButtonContainer, this.context.store)
    );
    layout.init();
  }

  render() {

    return (
      <div id="goldenLayout"/>
    )

  }
}

/*
GoldenLayoutWrapper.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}
*/

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoldenLayoutWrapper)
