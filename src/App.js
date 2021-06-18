import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';

import AuthProvider from './contexts/auth';

import Routes from './routes/index';

const App = () => {
    
    
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#72bf49' hidden />
            <AuthProvider>
                <View style={{ flex: 1 }}>
                    <Routes />
                </View>
            </AuthProvider>
        </NavigationContainer>

    )
}
export default App;