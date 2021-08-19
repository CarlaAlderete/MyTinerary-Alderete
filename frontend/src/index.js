import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

const globalStore = createStore(rootReducer)
ReactDOM.render(
  <Provider store={globalStore}>
      <App />
  </Provider>,
  document.getElementById('root')
); 