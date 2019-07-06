import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';
import { Counter } from 'domain/store.domain';
import { Action } from 'store/actions/Actions';

const initCounter: Counter = {
    count: 0
}

const couterReducer = (state = initCounter, action: Action): Counter => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case ActionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default combineReducers({
    counter: couterReducer
});
