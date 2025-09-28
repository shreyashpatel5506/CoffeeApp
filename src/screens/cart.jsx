import { View, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import myStore from '../store/store';
import Cartitem from '../Components/Cartitem';

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
    const { cartList } = myStore();

    // Group by product id
    const grouped = useMemo(() => groupCartItems(cartList), [cartList]);

    return (
        <View>
            <FlatList
                data={grouped}
                keyExtractor={(group) => group[0].id.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: group }) => (
                    <Cartitem group={group} />
                )}
            />
        </View>
    );
};

export default Cart;