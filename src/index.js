import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore,applyMiddleware,compose} from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import rootReducer from './stores/reducers/index'

import App from './views/App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
