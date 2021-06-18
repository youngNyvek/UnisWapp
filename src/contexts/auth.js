import React, { createContext, useState } from 'react';
import { View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import { Container } from './styles';

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);

    async function singInWithGoogle() {
        // Get the users ID token
        console.log("Entrou no sing");
        const { idToken } = await GoogleSignin.signIn();
        console.log("Pegou  o token");
        console.log(idToken);

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.log("Pegando credential");
        console.log(googleCredential);


        // Sign-in the user with the credential
        setUser(auth().signInWithCredential(googleCredential));
    }

    async function singInAnnon() {
        auth()
            .signInAnonymously()
            .then((res) => {
                setUser(res);
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }

                console.error(error);
            });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, singInWithGoogle, singInAnnon }}>
            {children}
        </AuthContext.Provider>
    )
}
