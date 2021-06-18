import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SignIn/SingIn';
const Route = createStackNavigator();

export default () => {
  return( 
    <Route.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#7159c1'}
        }}
        initialRouteName="SingIn">
        <Route.Screen name="SingIn" component={SingIn}/>

      
    </Route.Navigator>
    );
}