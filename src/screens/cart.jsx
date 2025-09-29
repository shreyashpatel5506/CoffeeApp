import React, { useMemo } from 'react';
import { View, FlatList, Text, CartStyleheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import myStore from '../store/store';
import Cartitem from '../Components/Cartitem';
import { CartStyle } from '../style';

// Helper to group cart items by product id
function groupCartItems(cartList) {
    const groups = {};
    cartList.forEach(item => {
        if (!groups[item.id]) groups[item.id] = [];
        groups[item.id].push(item);
    });
    return Object.values(groups);
}

const Cart = () => {
    const { cartList, cartPrice } = myStore();

    // Group by product id
    const grouped = useMemo(() => groupCartItems(cartList), [cartList]);

    return (
        <View style={CartStyle.container}>
            <LinearGradient
                colors={['#131e30ff', 'rgba(29, 42, 66, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={CartStyle.gradient}
            >
                {cartList.length === 0 ? (
                    <View style={CartStyle.emptyContainer}>
                        <View style={CartStyle.emptyBox}>
                            <View style={CartStyle.emptyCircle}>
                                <View style={CartStyle.innerCircle} />
                            </View>
                            <Text style={CartStyle.emptyText}>Your cart is empty</Text>
                            <Text style={CartStyle.emptysubText}>Add items to get started</Text>
                        </View>
                    </View>
                ) : (
                    <View style={CartStyle.listContainer}>
                        <FlatList
                            data={grouped}
                            keyExtractor={(group) => group[0].id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item: group }) => <Cartitem group={group} />}
                        />
                        <View style={CartStyle.separator}>
                            <View style={CartStyle.totalContainer}>
                                <Text style={CartStyle.totalText}>
                                    Total Price
                                </Text>
                                <Text style={CartStyle.text}>
                                    <Text style={CartStyle.text2}>$</Text>

                                    <Text style={CartStyle.text4}>{(cartPrice).toFixed(2)}</Text>
                                </Text>
                            </View>
                            <Pressable style={CartStyle.checkoutButton}>
                                <Text style={CartStyle.checkoutText}>Checkout</Text>
                            </Pressable>
                        </View>
                    </View>

                )}
            </LinearGradient>
        </View>
    );
};

export default Cart;