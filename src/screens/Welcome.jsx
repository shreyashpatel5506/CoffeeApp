import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
    Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CoffeBg from './../assests/background.png';
import logo from './../assests/mainPageCoffee.png';

const { width, height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient colors={['#D7A870', '#B08149']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea}>
                <ImageBackground source={CoffeBg} style={styles.bg}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                    <Text style={styles.heading}>
                        Coffee so good,{'\n'}your taste buds{'\n'}will love it
                    </Text>
                    <Text style={styles.para}>
                        The best grain, the finest roast, the most powerful flavor.
                    </Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.replace("MenuTabs")} // Navigate to bottom tabs
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Pressable>
                </ImageBackground>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: width * 0.7,
        height: height * 0.25,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
    },
    para: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    button: {
        width: width * 0.6,
        height: 50,
        backgroundColor: '#00512C',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});

export default Welcome;
