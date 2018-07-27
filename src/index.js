import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/index';
import reducers from './reducer';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );

render();
store.subscribe(render);
