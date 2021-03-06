import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersPage from '../pages/Orders/OrdersPage';
const Route = createStackNavigator();

export default () => {
  return( 
    <Route.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#7159c1'}
        }}
        initialRouteName="Orders">
        <Route.Screen name="OrdersPage" component={OrdersPage}/>

      
    </Route.Navigator>
    );
}