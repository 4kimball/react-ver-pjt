import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

import auth from '../reducers/auth';
const history = createBrowserHistory();
const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
