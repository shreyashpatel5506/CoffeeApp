import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import myStore from '../store/store';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();
    const { cartList, cartPrice, addOrder, clearCart } = myStore();
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // Simulate payment delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            const order = {
                id: Date.now(),
                items: cartList,
                total: cartPrice,
                date: new Date().toISOString(),
            };

            await addOrder(order);
            clearCart();

            navigation.replace('PaymentSuccess', { order });
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed! Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LinearGradient
            colors={['#0d1a26', '#1f2c44']}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Confirm Payment</Text>
                <Text style={styles.total}>Total: ${cartPrice.toFixed(2)}</Text>

                {loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <Pressable style={styles.button} onPress={handlePayment}>
                        <Text style={styles.buttonText}>Pay Now</Text>
                    </Pressable>
                )}
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
        fontSize: 22,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    total: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 40,
    },
    button: {
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

export default Payment;
