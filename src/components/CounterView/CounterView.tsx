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

// export class CounterView extends React.Component<CounterViewType> {
//     // static displayName = "aaaa";
//     render() {
//         return (
//             <>
//                 <h1>counter: {this.props.count}</h1>
//                 <button onClick={this.props.onIncrement}>+</button>
//                 <button onClick={this.props.onDecrement}>-</button>
//             </>
//         )
//     }
// }

function mapStateToProps(state): CounterViewType {
    return {
        count: state.counter.count,
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
