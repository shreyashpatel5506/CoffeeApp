import { View, Text, Image } from 'react-native';
import React from 'react';
import { CartitemStyle } from '../style';
import LinearGradient from 'react-native-linear-gradient';

// group: array of cart items with same product id, possibly different sizes
const Cartitem = ({ group }) => {
    // If only one size in cart for this product, show compact card (second UI)
    if (group.length === 1) {
        const item = group[0];
        return (
            <View style={CartitemStyle.container}>
                <LinearGradient
                    colors={['#2a3547ff', '#262B3300']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={CartitemStyle.gradient}
                >
                    <View style={CartitemStyle.FIRSTRow}>
                        <View style={CartitemStyle.imageContainer}>
                            <Image source={item.imagelink_square} style={CartitemStyle.image} />
                        </View>
                        <View style={CartitemStyle.aboutsection}>
                            <View style={CartitemStyle.name}>
                                <Text style={CartitemStyle.nameText}>{item.name}</Text>
                                <Text style={CartitemStyle.subText}>{item.special_ingredient}</Text>
                            </View>
                            <View style={CartitemStyle.parent}>
                                <Text style={CartitemStyle.subTextname}>{item.roasted}</Text>
                            </View>
                            <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 8 }}> {item.size}   {item.unitPrice} x {item.quantity} = {item.price.toFixed(2)} </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }

    // If multiple sizes, show grouped card (first UI)
    // Show product info and a row for each size
    const item = group[0];
    return (
        <View style={CartitemStyle.container}>
            <LinearGradient
                colors={['#2a3547ff', '#262B3300']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={CartitemStyle.gradient}
            >
                <View style={CartitemStyle.FIRSTRow}>
                    <View style={CartitemStyle.imageContainer}>
                        <Image source={item.imagelink_square} style={CartitemStyle.image} />
                    </View>
                    <View style={CartitemStyle.aboutsection}>
                        <View style={CartitemStyle.name}>
                            <Text style={CartitemStyle.nameText}>{item.name}</Text>
                            <Text style={CartitemStyle.subText}>{item.special_ingredient}</Text>
                        </View>
                        <View style={CartitemStyle.parent}>
                            <Text style={CartitemStyle.subTextname}>{item.roasted}</Text>
                        </View>
                    </View>
                </View>
                {/* Render a row for each size in the group */}
                {group.map((g, idx) => (
                    <View key={g.size} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', width: 30 }}>{g.size}</Text>
                        <Text style={{ color: '#f08c00', fontWeight: 'bold', width: 60 }}>
                            {g.unitPrice} x {g.quantity} = {g.price.toFixed(2)}
                        </Text>
                        {/* Quantity controls could go here if needed */}
                    </View>
                ))}
            </LinearGradient>
        </View>
    );
};

export default Cartitem;