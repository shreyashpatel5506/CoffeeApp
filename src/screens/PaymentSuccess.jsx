import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentSuccess = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { order } = route.params;

    return (
        <LinearGradient
            colors={['#0d1a26', '#1f2c44']}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Payment Successful!</Text>
                <Text style={styles.info}>Order ID: {order.id}</Text>
                <Text style={styles.info}>Total Paid: ${order.total.toFixed(2)}</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Go to Home</Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '85%',
        backgroundColor: '#1e2c42',
        borderRadius: 16,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#DC3535',
        paddingVertical: 14,
        paddingHorizontal: 60,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PaymentSuccess;
