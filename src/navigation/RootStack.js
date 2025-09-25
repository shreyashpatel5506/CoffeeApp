import React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";



// Screens
import FirstPage from "../screens/firstPage";
import ProductDetail from "../screens/ProductDetail";
import menu from "../navigation/Menu.js"

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="menu" component={menu} options={{ headerShown: false }} />
            <Stack.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                    header: () => (
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            backgroundColor: "#fff",
                            elevation: 4,
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: "700" }}>FirstPage</Text>
                        </View>
                    ),
                    // Hide bottom tab bar when on FirstPage
                    presentation: 'card',
                }}
            />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default RootStack;
