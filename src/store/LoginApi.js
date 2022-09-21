import { removeUserSession, setUserSeesion } from "../storage/Storage";
import { loginFailer, loginRequest, loginSuccess, logOut } from "./reducers/LoginReducer";
// import { loadState, saveState } from "../storage/ReduxStorage";

// ###########################################################

export const LoginApi = async( userdispatch, inputs, navigate, dispatch ) => {
   
  const apiUrl = "http://192.168.1.36:3001/api/v1/manage/login";

  dispatch(loginRequest(inputs))
    
  try {
    await fetch( apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password
      })
    })
    .then(handleResponse)
    .then((response) => {
      //   saveState(response)
      setUserSeesion(response.token,  inputs.username)
      userdispatch({ type: "LOGIN-SUCCES"})
      dispatch(loginSuccess(response))
      navigate('/app/dashboard')
      return response
    } 
  )}
  catch(error) {
      dispatch(loginFailer(error))
      // console.log(error)
    };
  return {
    LoginApi
  }
}

export const Logout = ( dispatch, navigate, userDispatch) => {

  // remove user from local storage to log user out
  removeUserSession("token")
  removeUserSession("user")
  userDispatch({type: "SING-OUT-SUCCES"})
  dispatch(logOut("خروج با موفقیت انجام شد"))
  navigate('/login')
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        Logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}