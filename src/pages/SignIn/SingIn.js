import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../contexts/auth';

GoogleSignin.configure({
    webClientId: "722528169483-1p3q5mork5ope2rp4jd94vpotrcmm7ug.apps.googleusercontent.com"
})

// import { Container } from './styles';

const SignIn = () => {
    const { singInWithGoogle, singInAnnon } = useContext(AuthContext);

    return (
        <View style={styles.View}>
            <View style={[styles.View, { flex: 2 }]}>

                <Text style={styles.Title} >
                    UniswApp
                </Text>
                <Image
                    source={require('../../../public/img/unicorn.png')}
                    style={styles.Image}
                />

            </View>


            <View style={styles.View}>
                <GoogleSigninButton
                    style={{ width: 192, height: 48, marginBottom: 150}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light} 
                    onPress={() => singInWithGoogle()}
                    />

                <TouchableOpacity onPress={() => singInAnnon()}>
                    <Text style={styles.Text} >
                        Entrar sem login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonLogIn: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 30
    },
    Text: {
        color: 'white',
        fontWeight: '600',
    
    },
    Title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    Image: {
        width: 200,
        height: 200
    }
})

export default SignIn;