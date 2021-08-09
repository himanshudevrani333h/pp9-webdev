import { createContext, useState, useEffect } from "react"
import { auth,firestore } from "./firebase";


export const AuthContext = createContext();

let AuthProvider = ({children})=>{

    let [currentUser,setUser] = useState(null);
    let [loading,setLoading] = useState(true);
  
    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged( async (user) => {
          if (user) {
            
            let { displayName, email,uid ,photoURL} = user;
            let docref = firestore.collection("users").doc(uid);
            let document = await docref.get();
            if (!document.exists) {
              docref.set({
                displayName,
                email,
                posts: [],
                photoURL,
              });
            }
            setUser({ displayName, email ,uid,photoURL});
          } else {
            setUser(user);
          }

          setLoading(false);
        });
        return () => {
          unsubscribeAuth();
        };
      }, []);

    return(
        <AuthContext.Provider value={currentUser}>
         {!loading && children}
        </AuthContext.Provider>
   )
}

export default AuthProvider