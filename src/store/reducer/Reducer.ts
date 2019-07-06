import * as ActionTypes from '../actions/ActionTypes';
import { IInitValues } from 'domain/store.domain';
import { Action } from 'store/actions/Actions';

const reducer = (state: IInitValues, action: Action): IInitValues => {
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

export default reducer;
