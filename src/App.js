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
import AddImages from './pages/addImages/AddImages';

function App() {

  // const getState = loadState();
  const auth = useSelector(selectAthunticated);
  const isAthunticated = getToken() || auth ? true : false

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
        
          {/* <Route path="*" element={<Navigate to={isAthunticated ? "/app/dashboard": "/login"}/>} />
          <Route
            path="/app"
            element={<PrivateRoute element={<Layout />} />}
          >
            <Route path="/app/dashboard" element={<Dashboard />}/>
            <Route path="/app/addImages" element={<AddImages />}/>
          </Route>
          <Route
            path="/login"
            element={<PublicRoute element={<LoginPage />} />}
          /> */}
          {/* <Route path="*" element={<Error />} /> */}
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );

  // function PrivateRoute({component, ...rest }) {
  //   console.log(isAthunticated)
  //   return (
    
  //     // <Route
  //     //   {...rest}
  //     //   render={props =>
  //     isAthunticated ? (
  //           <Layout /> 
  //           //  React.createElement(component, props)
            

  //         ) : (
  //           <Navigate
  //           to={{
  //             pathname: "/login",
  //             // state: {
  //             //   from: props.location,
  //             // },
  //           }}
  //         />
  //         )
  //     //   }
  //     // />
  //   );
  // }


  //   function PublicRoute({component, ...rest }) {
  //     console.log({isAthunticated})
  //     return (
  //       // <Route
  //       //   {...rest}
  //       //   render={props =>
  //       isAthunticated ? (
  //             <Navigate
  //               to={{
  //                 pathname: "/",
  //               }}
  //             />
  //           ) : (
  //             // React.createElement(component, props)
  //             <LoginPage />
            
  //           )
  //       //   }
  //       // />
  //     );
  //   }
  //   console.timeEnd("benchmark 2")



}

export default App;