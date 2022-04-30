import { getToken, removeUserSession, setUserSeesion } from "../storage/Storage";
import { loginFailer, loginRequest, loginSuccess, logOut } from "./reducers/LoginReducer";
// import { loadState, saveState } from "../storage/ReduxStorage";


// ###########################################################

export const LoginApi = async(dispatch, inputs, navigate) => {
   
    const apiUrl = "localhost:3001/api/v1/manage/login";

        dispatch(loginRequest(inputs))
            // console.log(inputs)
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
            // console.log(response)
              setUserSeesion(response.token,  inputs.username)
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

export const Logout = ( dispatch, navigate) => {

    // remove user from local storage to log user out
    console.log("logout")
    removeUserSession("token")
    removeUserSession("user")
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

