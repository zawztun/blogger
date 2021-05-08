import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './components/reducers';
import thunk from 'redux-thunk';


const store = createStore(reducers,applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


