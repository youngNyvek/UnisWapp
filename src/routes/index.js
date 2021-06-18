import React,{useContext} from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

import AuthRoute from './AuthRoute';
import RouteNavigation from './RoutesNavigation';
import {AuthContext} from '../contexts/auth';

const routes = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <RouteNavigation/>  : <AuthRoute/>
}

export default routes;