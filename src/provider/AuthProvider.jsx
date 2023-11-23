import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase/Firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) =>{
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     };
     const logout = () => {
        setIsLoading(true);
        return signOut(auth);
     }

     const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }



     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
         setUser(currentUser);
         setIsLoading(false);   
        });
        return () =>{
            return unSubscribe ();
        };
     },[]);






    const values ={createUser, user, login, isLoading, logout, updateUserProfile };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;