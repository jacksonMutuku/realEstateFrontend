import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
        apiKey: "AIzaSyA0piwCgQ4Pr698CTCq-DfhHi9o-70aAoI",
        authDomain: "realestate-f3704.firebaseapp.com",
        projectId: "realestate-f3704",
        storageBucket: "realestate-f3704.appspot.com",
        messagingSenderId: "601014449206",
        appId: "1:601014449206:web:a824ba3c278d94f96d9497",
        measurementId: "G-4E7NZKDF4K"
};
firebase.initializeApp(config);
export const createUserProfileDocument =async(userAuth, additionalData)=>{
        if(!userAuth) return;
        console.log(additionalData)
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        
        const snapshot = await userRef.get();
      
        if(!snapshot.exists){
                const {FirstName,LastName,email} = userAuth;
                const createdAt = new Date();
                try {
                        await userRef.set({
                                FirstName,
                                LastName,
                                email,
                                createdAt,
                                ...additionalData
                        });

                }catch (error){
                        console.log('error creating user', error.message);

                }
        }
        return userRef;
};

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;