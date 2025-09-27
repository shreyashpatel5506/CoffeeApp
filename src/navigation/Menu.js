import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../screens/Home.jsx"
import Cart from "../screens/cart.jsx"
import Favourite from '../screens/favourite.jsx'
import FirstPage from '../screens/firstPage.jsx'

const Tab = createBottomTabNavigator();

const CustomHeader = ({ navigation }) => (
    <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    }}>

        {/* Profile (Left Side) */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
                source={{ uri: "https://i.pravatar.cc/50" }}
                style={{ width: 35, height: 35, borderRadius: 20 }}
            />
        </TouchableOpacity>

        {/* Notifications (Right Side) */}
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={26} color="#000" />
        </TouchableOpacity>
    </View>
);

const Menu = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: (props) => <CustomHeader {...props} />,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === "Home")
                        iconName = focused ? "home" : "home-outline";
                    else if (route.name === "Cart")
                        iconName = focused ? "cart" : "cart-outline";
                    else if (route.name === "Favourite")
                        iconName = focused ? "heart" : "heart-outline";

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#FF8C32",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Favourite" component={Favourite} />

            {/* Hidden tab for FirstPage */}
            <Tab.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                    tabBarButton: () => null,
                }}
            />
        </Tab.Navigator>
    );
}

export default Menu;
