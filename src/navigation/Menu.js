import React from "react";
import { View, Text, } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home.jsx";
import CheckoutStack from "../navigation/CheckoutStack.js";
import Favourite from "../screens/favourite.jsx";
import Profile from "../screens/Profile.jsx";

const Tab = createBottomTabNavigator();


// Bottom Tabs Component
const Menu = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({

            headerShown: true,
            headerTitle: route.name,
            headerStyle: {
                backgroundColor: "#101724ff",
                borderBottomWidth: 0,
                height: 90,
                flexDirection: 'row',
                justifyContent: 'center',

            },
            headerTitleStyle: {
                color: "#f2f2f2", // White title text
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: 'Poppins'
            },

            // Icon Logic
            tabBarIcon: ({ color, size, focused }) => {
                let iconName;
                if (route.name === "Home") iconName = focused ? "home" : "home-outline";
                else if (route.name === "Checkout")
                    iconName = focused ? "cart" : "cart-outline";
                else if (route.name === "Favourite")
                    iconName = focused ? "heart" : "heart-outline";
                // 2. ADDED: Icon logic for the new Profile tab
                else if (route.name === "Profile")
                    iconName = focused ? "person" : "person-outline";

                return <Ionicons name={iconName} size={size} color={color} />;
            },

            // Tab Bar Styling
            tabBarActiveTintColor: "#FF8C32",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                backgroundColor: "#101724ff",
                borderTopWidth: 0, // Optional: remove line above tab bar
                height: 60,
                paddingBottom: 5,
            },
            tabBarLabelStyle: {
                fontSize: 12,
            }
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Checkout" component={CheckoutStack} />
        <Tab.Screen name="Favourite" component={Favourite} />
        {/* 3. ADDED: The new Profile Tab */}
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

export default Menu;
