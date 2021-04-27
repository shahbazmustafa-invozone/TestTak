import React from 'react';
//Navigation
import AppNavigation from "./src/navigation/AppNavigation";
//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from './src/Redux/reducers';
import thunkMiddleware from 'redux-thunk';
const store = createStore(allReducers, applyMiddleware(thunkMiddleware))
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
export default App;