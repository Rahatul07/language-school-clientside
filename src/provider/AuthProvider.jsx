import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createToken, getRole } from "../components/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const googleProvider = new GoogleAuthProvider();

  // Get user role
  useEffect(() => {
    if (user?.email) {
      getRole(user?.email).then((role) => {
        // console.log("role from auth context", role);
        setUserRole(role);
      });
    }
  }, [user]);
  // get user role
  useEffect(() => {
    if (user?.email) {
      getRole(user?.email).then((role) => {
        console.log("user role from authProvider", role);
        setUserRole(role);
      });
    }
  }, [user]);

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (userName, userImage) => {
    setLoading(true);
    console.log("update info", userName, userImage);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userImage,
    });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     if (currentUser.email) {
  //       axios
  //         .post("https://language-school-server.vercel.app/jwt", {
  //           email: currentUser.email,
  //         })
  //         .then((data) => {
  //           console.log(data.data.token);
  //           localStorage.setItem("access-token", data.data.token);
  //         });
  //     } else {
  //       localStorage.removeItem("access-token");
  //     }
  //     setLoading(false);
  //   });
  //   return () => {
  //     return unsubscribe();
  //   };
  // }, []);
  // user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        console.log("current user from auth provider", currentUser.email);
        createToken(currentUser);
      }
      console.log("current user", currentUser);
      localStorage.removeItem("access-token");
      setLoading(false);
    });
    return () => unsubscribe();
  });

  const authInfo = {
    auth,
    user,
    setUser,
    userRole,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
