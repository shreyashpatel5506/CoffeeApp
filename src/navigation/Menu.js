import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home.jsx"
import cart from "../screens/cart.jsx"
import favourite from '../screens/favourite.jsx'
import profile from "../screens/favourite.jsx"

const Tab = createBottomTabNavigator();

const customHeader = ({ navigation, title }) => {
    return (<View
        style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: "#fff",
            elevation: 4,
        }}
    >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Notifications */}
            <TouchableOpacity onPress={() => alert("Notifications")}>
                <Icon
                    name="notifications-outline"
                    size={24}
                    style={{ marginRight: 15 }}
                />
            </TouchableOpacity>

            {/* Profile Pic */}
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/50" }}
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                />
            </TouchableOpacity>
        </View>
    </View>
    );
};

const Menu = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                header: () => { <customHeader navigation={navigation} title={route.name} /> },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") iconName = "home-outline";
                    else if (route.name === "Cart") iconName = "cart-outline";
                    else if (route.name === "Favourite") iconName = "heart-outline";
                    else if (route.name === "Profile") iconName = "person-outline";
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#FF8C32",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={cart} />
            <Tab.Screen name="Favourite" component={favourite} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
    );
}

export default Menu