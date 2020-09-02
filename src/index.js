import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/pages/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './config/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import firebase from './config/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))
// const store = createStore(rootReducer, applyMiddleware(thunk))

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
