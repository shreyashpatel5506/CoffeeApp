import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import firstPage from '../screens/firstPage';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="firstPage" component={firstPage} />
        </Drawer.Navigator>
    )
};

export default DrawerNavigation;