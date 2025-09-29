import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import myStore from '../store/store';
import { useNavigation } from '@react-navigation/native';
// Note: You may need to install react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'; // This handles most free icons (Solid and Brands)
import Icon6 from 'react-native-vector-icons/FontAwesome6';

import { PaymentStyle } from '../style.js';
// --- MOCK DATA ---
const MOCK_CARD = {
    holderName: 'SHREYASH PATEL',
    number: '3897********4638',
    expiry: '02/30',
    type: 'VISA' // Used for logo display
};

// Available Payment Options
const paymentOptions = [
    { id: 'wallet', name: 'Wallet', icon: 'wallet', type: 'fa' },
    { id: 'google', name: 'Google Pay', icon: 'google', type: 'fa' },
    { id: 'apple', name: 'Apple Pay', icon: 'apple', type: 'fa' },
    { id: 'amazon', name: 'Amazon Pay', icon: 'amazon', type: 'fa' },
];

const Payment = () => {
    const navigation = useNavigation();
    const { cartList, cartPrice, addOrder, clearCart } = myStore();
    const [loading, setLoading] = useState(false);
    // State to track which payment method is selected
    const [selectedMethod, setSelectedMethod] = useState('creditCard'); // Default to credit card

    const handlePayment = async () => {
        if (loading) return;

        setLoading(true);
        // Determine the payment source for the button text (e.g., 'Credit Card', 'Wallet')
        const sourceName = selectedMethod === 'creditCard'
            ? 'Credit Card'
            : paymentOptions.find(opt => opt.id === selectedMethod)?.name || 'Payment';

        try {
            // Simulate payment delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            const order = {
                id: Date.now(),
                items: cartList,
                total: cartPrice,
                date: new Date().toISOString(),
                method: sourceName, // Add the selected method to the order
            };

            await addOrder(order);
            clearCart();

            navigation.replace('PaymentSuccess', { order });
        } catch (error) {
            console.error('Payment failed:', error);
            alert(`Payment failed via ${sourceName}! Please try again.`);
        } finally {
            setLoading(false);
        }
    };

    const getButtonText = () => {
        if (loading) return null;
        if (selectedMethod === 'creditCard') return `Pay $${cartPrice.toFixed(2)} from Credit Card`;

        const method = paymentOptions.find(opt => opt.id === selectedMethod);
        if (method) return `Pay $${cartPrice.toFixed(2)} with ${method.name}`;

        return `Pay $${cartPrice.toFixed(2)}`;
    };

    // Helper to format credit card number with spaces
    const formatCardNumber = (num) => {
        return num.match(/.{1,4}/g).join(' ');
    };

    // RENDER HELPER for payment options
    const PaymentOption = ({ id, name, balance, icon, type }) => {
        const isSelected = selectedMethod === id;
        const IconComponent = Icon6;
        const iconColor = isSelected ? '#e8995a' : '#ccc';
        return (
            <LinearGradient
                colors={['#172130ff', '#0d1420ff']}
                style={PaymentStyle.absoluteFill}
            >
                <Pressable
                    style={[
                        PaymentStyle.optionContainer,
                        isSelected && PaymentStyle.optionSelected,
                    ]}
                    onPress={() => setSelectedMethod(id)}
                >
                    <View style={PaymentStyle.optionLeft}>
                        <IconComponent name={icon} size={24} color={iconColor} />
                        <Text style={PaymentStyle.optionText}>{name}</Text>
                    </View>
                    {balance && <Text style={PaymentStyle.optionBalance}>{balance}</Text>}
                </Pressable>
            </LinearGradient>
        );
    };

    return (
        <LinearGradient
            colors={['#0C0F14', '#1d2a3fff']} // Slightly darker gradient for the overall background
            style={PaymentStyle.container}
        >

            <ScrollView contentContainerStyle={PaymentStyle.scrollContent} showsVerticalScrollIndicator={false}>

                {/* 1. Credit Card UI (Always Visible, acts as first option) */}
                <Pressable
                    style={[
                        PaymentStyle.creditCard,
                        selectedMethod === 'creditCard' && PaymentStyle.creditCardSelected
                    ]}
                    onPress={() => setSelectedMethod('creditCard')}
                >
                    <LinearGradient
                        colors={['#172130ff', '#0d1420ff']}
                        style={PaymentStyle.absoluteFill}
                    >
                        <View style={PaymentStyle.header}>
                            <Text style={PaymentStyle.title}>Credit Card</Text>
                        </View>

                        <View style={PaymentStyle.cardHeader}>
                            <Icon6 name="credit-card" size={24} color="#e8995a" />
                            <Text style={PaymentStyle.cardType}>{MOCK_CARD.type}</Text>
                        </View>
                        <Text style={PaymentStyle.cardNumber}>
                            {formatCardNumber(MOCK_CARD.number)}
                        </Text>
                        <View style={PaymentStyle.cardFooter}>
                            <View>
                                <Text style={PaymentStyle.cardLabel}>Card Holder Name</Text>
                                <Text style={PaymentStyle.cardValue}>{MOCK_CARD.holderName}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={PaymentStyle.cardLabel}>Expiry Date</Text>
                                <Text style={PaymentStyle.cardValue}>{MOCK_CARD.expiry}</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </Pressable>

                {/* 2. Other Payment Options List */}
                <View style={PaymentStyle.optionsList}>
                    {paymentOptions.map(option => (
                        <PaymentOption key={option.id} {...option} />
                    ))}

                </View>

            </ScrollView>

            {/* 3. Bottom Bar with Price and Button */}
            <View style={PaymentStyle.bottomBar}>

                <View style={PaymentStyle.priceContainer}>
                    <Text style={PaymentStyle.priceLabel}>Price</Text>
                    <Text style={PaymentStyle.finalPrice}>
                        ${cartPrice.toFixed(2)}
                    </Text>
                </View>

                <Pressable
                    style={[
                        PaymentStyle.payButton,
                        loading && PaymentStyle.payButtonLoading,
                    ]}
                    onPress={handlePayment}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={PaymentStyle.payButtonText}>{getButtonText()}</Text>
                    )}
                </Pressable>
            </View>
        </LinearGradient>
    );
};

export default Payment;