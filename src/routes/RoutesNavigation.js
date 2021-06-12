import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersPage from '../pages/OrdersPage';
const Route = createStackNavigator();

export default () => {
  return( 
    <Route.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#292929'}
    }}
    initialRouteName="Orders">
        <Route.Screen name="OrdersPage" component={OrdersPage}/>

      
    </Route.Navigator>
    );
}