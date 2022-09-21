import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// component
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import AddImages from './pages/addImages/AddImages';
import { useUserState } from './context/UserContext';

// styles
import './App.css';

function App() {

  // const getState = loadState();
  // global
  var { isAthunticated } = useUserState()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
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
              path="/app"
              element={<Layout />}
            >
              <Route path="/app/dashboard" element={<Dashboard />}/>
              <Route path="/app/addImages" element={<AddImages />}/>
            </Route>
          )}
          <Route path="*" element={<Navigate to={isAthunticated ? "/app/dashboard": "/login"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;