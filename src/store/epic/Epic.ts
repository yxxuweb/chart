import { combineEpics } from 'redux-observable';
import { increment, decrement } from '../actions/Actions';
import * as ActionTypes from '../actions/ActionTypes';
import { filter, delay, map } from 'rxjs/operators';

const epic = (action$, state$): any => {
    return action$.pipe(
        filter(
            (action: any): boolean => action.type === ActionTypes.DECREMENT || action.type === ActionTypes.INCREMENT
        ),
        delay(1000),
        map((): any => {
            const count: number = state$.value.counter.count;
            if (count > 0) {
                return decrement();
            } else if (count < 0) {
                return increment();
            } else {
                return { type: 'no-op' };
            }
        })
    );
};

export default combineEpics(epic);
