import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome.jsx";
import Menu from "./Menu.js";
import Home from "../screens/Home.jsx";
import ProductDetail from "../screens/ProductDetail.js";

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Welcome page (first screen, no tabs) */}
            <Stack.Screen name="Welcome" component={Welcome} />

            {/* Bottom Tabs */}
            <Stack.Screen name="MenuTabs" component={Menu} />

            {/* Other stack screens */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};

export default RootStack;
