import * as ActionTypes from './ActionTypes';

export interface Iincrement {
    type: typeof ActionTypes.INCREMENT;
}

export interface Idecrement {
    type: typeof ActionTypes.DECREMENT;
}

export type Action = Iincrement | Idecrement;

export const increment = (): Iincrement => ({
    type: ActionTypes.INCREMENT,
});

export const decrement = (): Idecrement => ({
    type: ActionTypes.DECREMENT,
});
