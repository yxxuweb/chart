import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/Actions';
import { Dispatch } from 'redux';

export interface CounterViewType {
    count?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export let CounterView = ({ count, onIncrement, onDecrement }: CounterViewType): ReactElement => (
    <>
        <h1>counter: {count}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </>
);

function mapStateToProps(state): CounterViewType {
    return {
        count: state.count,
    };
}

function mapDispatchToProps(dispatch): CounterViewType {
    return {
        onIncrement: (): Dispatch => dispatch(Actions.increment()),
        onDecrement: (): Dispatch => dispatch(Actions.decrement()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);
