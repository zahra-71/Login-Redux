//return the user from the session storage
export const getUser = () => {
    return localStorage.getItem('user') || null;   
}

//return the token from the session storage
export const getToken = () => {
    return localStorage.getItem ('token') || null;
}

//remove the token and user from the session storage
export const removeUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

//set the token and user from the session storage
export const setUserSeesion = (token, user) => {
    localStorage.setItem('token',token);
    localStorage.setItem('user', user);
}