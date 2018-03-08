import React from 'react';
import { Provider } from 'react-redux';

import People from './people/People';
import store from './common/store';

import './common/style.css';

const App = () => (
  <Provider store={store}>
    <div id="appContainer">
      <People />
    </div>
  </Provider>
);
export default App;
