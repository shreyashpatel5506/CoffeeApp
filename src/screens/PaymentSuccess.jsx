import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PaymentSuccessStyle } from '../style.js';

const PaymentSuccess = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { order } = route.params;

    // Helper to format the date nicely
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = new Date(order.date).toLocaleDateString(undefined, dateOptions);

    return (
        <LinearGradient
            colors={['#0d1a26', '#1f2c44']}
            style={PaymentSuccessStyle.container}
        >
            <View style={PaymentSuccessStyle.card}>

                {/* 1. Large Success Icon */}
                <Icon
                    name="check-circle"
                    size={80}
                    color="#5CB85C" // A distinct success color (Green)
                    style={PaymentSuccessStyle.successIcon}
                />

                <Text style={PaymentSuccessStyle.title}>Order Placed!</Text>
                <Text style={PaymentSuccessStyle.subtitle}>Your coffee is brewing and will be ready soon.</Text>

                {/* 2. Order Details Summary */}
                <View style={PaymentSuccessStyle.detailContainer}>
                    <View style={PaymentSuccessStyle.detailRow}>
                        <Text style={PaymentSuccessStyle.detailLabel}>Total Paid:</Text>
                        <Text style={PaymentSuccessStyle.detailValue}>${order.total.toFixed(2)}</Text>
                    </View>
                    <View style={PaymentSuccessStyle.detailRow}>
                        <Text style={PaymentSuccessStyle.detailLabel}>Payment Date:</Text>
                        <Text style={PaymentSuccessStyle.detailValue}>{formattedDate}</Text>
                    </View>
                    <View style={PaymentSuccessStyle.detailRow}>
                        <Text style={PaymentSuccessStyle.detailLabel}>Order ID:</Text>
                        <Text style={PaymentSuccessStyle.detailValue}>{order.id}</Text>
                    </View>
                </View>

                {/* 3. Primary Button: Go Home (Now the only button) */}
                <Pressable
                    style={PaymentSuccessStyle.primaryButton}
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        })
                    }
                >
                    <Text style={PaymentSuccessStyle.primaryButtonText}>Continue Shopping</Text>
                </Pressable>

            </View>
        </LinearGradient>
    );
};


export default PaymentSuccess;