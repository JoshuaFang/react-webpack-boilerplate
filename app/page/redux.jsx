
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import * as CounterActions from '../actions/counter-actions';
import configureStore from '../stores/counter-store';

class Counter extends Component {
    render () {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
        return (
            <p>
            Clicked: {counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
            {' '}
            <button onClick={incrementIfOdd}>Increment if odd</button>
            {' '}
            <button onClick={() => incrementAsync()}>Increment async</button>
            </p>
        )
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

// connect actions to Counter
var CounterProvider = connect(function (state) {
    return {
        counter: state.counter
    }
}, function (dispatch) {
    return bindActionCreators(CounterActions, dispatch);
})(Counter);

class ReduxDemo extends Component {
    render () {
        return (
            <Provider store={ configureStore() }>
                <CounterProvider/>
            </Provider>
        );
    }
}

export default ReduxDemo
