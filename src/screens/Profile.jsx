import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from "react-native-linear-gradient";
import myStore from '../store/store'; // Assuming you have access to your store
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProfileStyle } from '../style.js';
// --- MAIN PROFILE COMPONENT ---
const Profile = () => {
    const navigation = useNavigation();

    // Fetch state and actions from the store
    const { OrderHistory, loadOrderHistory } = myStore();

    useEffect(() => {
        // Load history when the component mounts
        loadOrderHistory();
    }, [loadOrderHistory]);

    // Render component for each order item
    const renderOrderItem = ({ item }) => (
        <TouchableOpacity
            style={ProfileStyle.orderItem}
            // In a real app, you'd navigate to an OrderDetail screen here
            onPress={() => alert(`Viewing Order ID: ${item.id}`)}
        >
            <View style={ProfileStyle.orderInfo}>
                <Text style={ProfileStyle.orderId}>Order ID: {item.id.toString().slice(-6)}</Text>
                <Text style={ProfileStyle.orderDate}>{new Date(item.date).toLocaleDateString()}</Text>
            </View>
            <View style={ProfileStyle.orderSummary}>
                <Text style={ProfileStyle.orderTotal}>${item.total.toFixed(2)}</Text>
                <Icon name="chevron-right" size={14} color="#f2f2f2" />
            </View>
        </TouchableOpacity>
    );

    // Placeholder for User Profile Info
    const UserProfile = () => (
        <View style={ProfileStyle.userInfoCard}>
            <Image
                source={{ uri: "https://i.pravatar.cc/150?img=4" }}
                style={ProfileStyle.profileImage}
            />
            <Text style={ProfileStyle.userName}>The Golden Hour</Text>
            <Text style={ProfileStyle.userEmail}>Goldenhour@coffee.com</Text>

            <TouchableOpacity style={ProfileStyle.logoutButton}>
                <Text style={ProfileStyle.logoutButtonText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );

    // Header for the Order History list
    const HistoryHeader = () => (
        <Text style={ProfileStyle.historyTitle}>Order History ({OrderHistory.length})</Text>
    );


    return (
        <LinearGradient
            colors={['#0C0F14', '#2d3441']} // Updated end color slightly for better gradient blend
            start={{ x: 0.2, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={ProfileStyle.Container}
        >
            <FlatList
                data={OrderHistory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderOrderItem}
                ListHeaderComponent={
                    <>
                        {/* 1. Profile Info */}
                        <UserProfile />

                        {/* 2. History Title */}
                        <HistoryHeader />
                    </>
                }
                ListEmptyComponent={
                    <View style={ProfileStyle.emptyState}>
                        <Text style={ProfileStyle.emptyText}>No orders placed yet!</Text>
                        <TouchableOpacity
                            style={ProfileStyle.startShoppingButton}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={ProfileStyle.startShoppingText}>Start Shopping</Text>
                        </TouchableOpacity>
                    </View>
                }
                contentContainerStyle={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </LinearGradient>
    );
};

export default Profile;