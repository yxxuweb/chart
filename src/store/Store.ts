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
import reducer from './reducer/Reducer';
import rootEpic from './epic/Epic';

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
