import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import { getToken } from './storage/Storage';
import { selectAthunticated } from './store/reducers/LoginReducer';

import Layout from './components/Layout/Layout';
import Error from './pages/error/Error';
import { loadState } from './storage/ReduxStorage';

function App() {

  // const getState = loadState();
  const auth = useSelector(selectAthunticated);
  const isAthunticated = getToken() || auth ? true : false

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/app"
            element={<Navigate replace to="/app/dashboard" />}
          />
          {!isAthunticated && (
            <Route 
              path="/login"
              element={<LoginPage />}
            />
          )}
          {isAthunticated && (
            <Route 
              path="/app/*"
              element={<Layout />}
            />
          )}
          <Route path="*" element={<Navigate to={isAthunticated ? "/app/dashboard": "/login"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;