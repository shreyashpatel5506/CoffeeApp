import React from "react";
import {
    SafeAreaView,
    View,
    Text,

    Image,
    ImageBackground,
    Pressable,

} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CoffeBg from './../assests/background.png';
import logo from './../assests/mainPageCoffee.png';
import { WelcomeStyle } from "../style.js";



const Welcome = ({ navigation }) => {
    return (
        <LinearGradient colors={['#0C0F14', '#2d3441ff']}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 1, y: 1 }}

            style={WelcomeStyle.gradient}
        >
            <SafeAreaView style={WelcomeStyle.safeArea}>
                <ImageBackground source={CoffeBg} style={WelcomeStyle.bg}>
                    <Image
                        source={logo}
                        style={WelcomeStyle.logo}
                    />
                    <Text style={WelcomeStyle.heading}>
                        Coffee so good,{'\n'}your taste buds{'\n'}will love it
                    </Text>
                    <Text style={WelcomeStyle.para}>
                        The best grain, the finest roast, the most powerful flavor.
                    </Text>
                    <Pressable
                        style={WelcomeStyle.button}
                        onPress={() => navigation.replace("MenuTabs")} // Navigate to bottom tabs
                    >
                        <Text style={WelcomeStyle.buttonText}>Get Started</Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView>
        </LinearGradient>
    );
};


export default Welcome;
