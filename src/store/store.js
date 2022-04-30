import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './reducers/LoginReducer';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    // middleware: [Thunk]
  },
});
