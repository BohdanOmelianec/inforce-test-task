import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persist from './redux/store';

const { store, persistor } = persist()

ReactDOM.render(
  // Provider share values between components without having to explicitly pass a prop through every level of the tree.
  <Provider store={store}>
    {/* As you click around on the different <Link>s, the router renders the matching <Route/> */}
    <Router>
      {/* PersistGate sases all of the data in localStorage */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);
