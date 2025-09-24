import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, Text, View, StyleSheet, Image, Pressable } from 'react-native';
import CoffeBg from './../assests/background.png';
import logo from './../assests/mainPageCoffee.png';

import myStore from '../store/store'
const Home = () => {
    const { CoffeeList, BeansList } = myStore();
    console.log(CoffeeList, BeansList);

    return (
        <LinearGradient
            colors={['#D7A870', '#B08149']}
            style={styles.gradient}
        >
            <ImageBackground source={CoffeBg} style={styles.container}>
                <Image
                    source={logo}
                    style={{ width: 453, height: 302, resizeMode: 'contain' }}
                />
                <Text style={styles.heading}>

                    Coffee so good,
                    your taste buds
                    will love it

                </Text>
                <Text
                    style={styles.para}
                >
                    The best grain, the finest roast, the most powerful flavor.
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </ImageBackground>
        </LinearGradient >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    gradient: {
        flex: 1,
        degree: 90,
    }, heading: {
        fontFamily: 'Montserrat',
        fontStyle: 'semi-bold',
        fontSize: 26,
        color: 'white',
        width: 208,
        height: 96,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    para: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: 14,
        color: 'white',
        width: 288,
        height: 48,
        textAlign: 'center',
    },
    button: {
        width: 235,
        height: 54,
        backgroundColor: '#00512C',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontFamily: 'Montserrat',
        fontStyle: 'semi-bold',
        fontSize: 20,
        color: 'white',
        padding: 7,
        textAlign: 'center',
    },
});

export default Home;