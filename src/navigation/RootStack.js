import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Navigators
import DrawerNavigation from "../navigation/DrawerNavigation.js"

// Screens
import firstPage from "../screens/firstPage";
import ProductDetail from "../screens/ProductDetail";

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Drawer wraps Tabs */}
            <Stack.Screen name="DrawerNav" component={DrawerNavigation} />

            {/* Extra pages pushed over Drawer/Tabs */}
            <Stack.Screen name="FirstPage" component={firstPage} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};

export default RootStack;
