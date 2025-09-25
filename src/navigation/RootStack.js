import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ProductDetail from "../screens/ProductDetail";
import Menu from "../navigation/Menu.js"

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="menu" component={Menu} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};

export default RootStack;
