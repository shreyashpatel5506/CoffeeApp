import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home.jsx"
import Cart from "../screens/cart.jsx"
import Favourite from '../screens/favourite.jsx'
import FirstPage from '../screens/firstPage.jsx'

const Tab = createBottomTabNavigator();

const CustomHeader = ({ route }) => (
    // <View style={{ flexDirection: "row", alignItems: 'flex-end', justifyContent: "space-between" }}>
    //     <View style={{ flexDirection: "row", alignItems: "center" }}>
    //         <TouchableOpacity onPress={() => alert("Notifications")}>
    //             <Icon
    //                 name="notifications-outline"
    //                 size={24}
    //                 style={{ marginRight: 15 }}
    //             />
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => alert("Profile")}>
    //             <Image
    //                 source={{ uri: "https://i.pravatar.cc/50" }}
    //                 style={{ width: 35, height: 35, borderRadius: 20 }}
    //             />
    //         </TouchableOpacity>
    //     </View>
    // </View>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

        {/* Profile (Left Side) */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
                source={{ uri: "https://i.pravatar.cc/50" }}
                style={{ width: 35, height: 35, borderRadius: 20 }}
            />
        </TouchableOpacity>

        {/* Notifications (Right Side) */}
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
            <Icon
                name="notifications-outline"
                size={26}
            />
        </TouchableOpacity>

    </View>

);

const Menu = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: (props) => <CustomHeader {...props} />,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") iconName = "home-outline";
                    else if (route.name === "Cart") iconName = "cart-outline";
                    else if (route.name === "Favourite") iconName = "heart-outline";
                    return <Icon name={iconName} size={size} color={color} />;
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
