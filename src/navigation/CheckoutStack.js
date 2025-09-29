import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/cart.jsx";
import Payment from "../screens/Payment";
import PaymentSuccess from "../screens/PaymentSuccess";
import { CustomHeader } from "../navigation/Menu.js"; // Reuse header from Menu.js

const Stack = createStackNavigator();

const CheckoutStack = () => {
    return (
        <Stack.Navigator
            // screenOptions={{
            //     header: (props) => <CustomHeader {...props} />, // Use Menu.js header
            // }}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        </Stack.Navigator>
    );
};

export default CheckoutStack;
