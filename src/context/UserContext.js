import React from "react"
import { getToken } from "../storage/Storage";

var UserStateContext = React.createContext()
var UserDispatchContext = React.createContext()

function UserReducer(state, action) {
  switch (action.type) {
    case "LOGIN-SUCCES":
      return { ...state, isAthunticated: true};
    case "SING-OUT-SUCCES":
      return {...state, isAthunticated: false};
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(UserReducer, {
    isAthunticated: !!getToken(),
  });
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useDispatchState must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserDispatch, useUserState };