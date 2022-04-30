import {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from "@material-ui/core";
import './index.css';
import App from './App';
import Themes from './themes';
import { store } from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './storage/ReduxStorage';
import { ThemeProvider } from '@material-ui/styles';
import { LayoutProvider } from './context/LayoutContext';

const persistedState = loadState();

// store.subscribe(() => {
//   saveState(store.getState())
// })
const loadingStyle = {
  fontSize: "2rem",
  display: "flex",
  // textAlign: "center",
  justifyContent: 'center', 
  alignItems:"center"
}

ReactDOM.render(
  <ThemeProvider theme={Themes.default}>
    <LayoutProvider>
      <Provider store={store}>
      <Suspense  fallback={<div style={loadingStyle}>Loading... </div>}>
            <CssBaseline />
            <App />
          </Suspense>
      </Provider>
    </LayoutProvider>

  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
