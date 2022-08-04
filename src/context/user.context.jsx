import { useState } from "react";
import { createContext, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase";

// value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

// provider
export const UserProvider = ({children}) => {
  const[currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}
  
  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);

    })
    return unsubscribe
  },[])

  return (
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  )
}


