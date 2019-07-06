// import { createStore } from 'redux';
// import reducer from './reducer/Reducer';
// import { IInitValues } from 'domain/store.domain';

// const initValues: IInitValues = {
//     count: 0
// }

// const store = createStore(reducer, initValues);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { IInitValues } from 'domain/store.domain';
import reducer from './reducer/Reducer';
import epic from './Epic';

const epicMiddleware = createEpicMiddleware();
const initValues: IInitValues = {
    count: 0,
};

const store = createStore(reducer, initValues, applyMiddleware(epicMiddleware));

epicMiddleware.run(epic);

export default store;
