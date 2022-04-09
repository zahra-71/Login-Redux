import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loginReducer from './reducers/LoginReducer';
import { LoginApi } from './LoginApi';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    // middleware: [Thunk]
  },
});
