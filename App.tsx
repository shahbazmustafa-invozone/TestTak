import React from 'react';
//Navigation
import AppNavigation from "./src/navigation/AppNavigation";
//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from './src/Redux/reducers';
import rootSaga from "./src/Redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();


let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
export default App;