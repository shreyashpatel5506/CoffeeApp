// RootStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome.jsx";
import Menu from "./Menu.js";
import Home from "../screens/Home.jsx";
import ProductDetail from "../screens/ProductDetail.jsx";
import Payment from "../screens/Payment.jsx"
import PaymentSuccess from "../screens/PaymentSuccess.jsx"
import Profile from "../screens/Profile.jsx"
import CheckoutStack from "./CheckoutStack.js";
import Cart from "../screens/cart.jsx"; // Still import Cart, but don't use it directly

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Welcome" component={Welcome} />

            <Stack.Screen name="MenuTabs" component={Menu} />

            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="ProductDetail" component={ProductDetail} />

            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />

        </Stack.Navigator>
    );
};

export default RootStack;