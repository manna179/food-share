import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email }
        axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        .then(res=>{
            console.log('login token',res.data)
              setLoading(false);
        })
      }else{
        axios.post('http://localhost:5000/logout',{},{
            withCredentials:true
        }).then(res=>{
            console.log('logout',res.data)
            setLoading(false)
        })
      }
// djxhlk,gj
    
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    singInWithGoogle,
    signOutUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
