import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { CartitemStyle } from '../style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import myStore from '../store/store';

const Cartitem = ({ group }) => {
    const { incrementQuantity, decrementQuantity, removeItemFully } = myStore();

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
                    <Pressable
                        style={CartitemStyle.delbutton}
                        onPress={() => removeItemFully(item.id, item.size)}
                    >
                        <Ionicons name="close" size={18} color="#fff" />
                    </Pressable>
                    <View style={CartitemStyle.FIRSTRow}>
                        <View style={CartitemStyle.imageContainer}>
                            <Image source={item.imagelink_square} style={CartitemStyle.image} />
                        </View>
                        <View style={CartitemStyle.aboutsection}>
                            <View style={CartitemStyle.name}>
                                <Text style={CartitemStyle.nameText}>{item.name}</Text>
                                <Text style={CartitemStyle.subText}>{item.special_ingredient}</Text>
                            </View>
                            <View style={CartitemStyle.sizeRow}>

                                <View style={CartitemStyle.size}>
                                    <Text style={CartitemStyle.sizeText}>{item.size}</Text>
                                </View>

                                <Text style={CartitemStyle.text}>
                                    <Text style={CartitemStyle.text2}>$</Text>
                                    <Text style={CartitemStyle.text3}>{(item.price).toFixed(2)}</Text>
                                </Text>
                            </View>

                        </View>
                    </View>

                    <View style={CartitemStyle.qanitityRow}>
                        <Pressable style={
                            CartitemStyle.box
                        }
                            disabled={item.quantity === 1}
                            onPress={() => decrementQuantity(item.id, item.size)}>
                            <Ionicons name="remove" size={28} color={item.quantity === 1 ? '#888' : '#fff'} />
                        </Pressable>
                        <View style={CartitemStyle.qanutity}>
                            <Text style={CartitemStyle.qantityText}
                            >
                                {item.quantity}
                            </Text>
                        </View>
                        <Pressable style={
                            CartitemStyle.box
                        }
                            onPress={() => incrementQuantity(item.id, item.size)}>
                            <Ionicons name="add" size={28} color="#FFf" />
                        </Pressable>
                    </View>
                </LinearGradient>
            </View>
        );
    }

    const item = group[0];
    return (
        <View style={CartitemStyle.container}>
            <LinearGradient
                colors={['#2a3547ff', '#262B3300']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={CartitemStyle.gradient}
            >
                <Pressable
                    style={CartitemStyle.delbutton}
                    onPress={() => removeItemFully(item.id, item.size)}
                >
                    <Ionicons name="close" size={18} color="#fff" />
                </Pressable>
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
                    <View style={CartitemStyle.itemRow}>
                        <View style={[CartitemStyle.sizeRow, CartitemStyle.sizemultiqanitiy]}>

                            {/* Size */}
                            <View style={CartitemStyle.size}>
                                <Text style={CartitemStyle.sizeText}>{g.size}</Text>
                            </View>

                            {/* Price */}
                            <Text style={CartitemStyle.text}>
                                <Text style={CartitemStyle.text2}>$</Text>
                                <Text style={CartitemStyle.text3}>{(g.unitPrice * g.quantity).toFixed(2)}</Text>
                            </Text>
                        </View>

                        {/* Quantity Controls */}
                        <View style={[CartitemStyle.qanitityRow, CartitemStyle.mulitplesizequnatity]}>
                            <Pressable style={CartitemStyle.box}
                                onPress={() => decrementQuantity(g.id, g.size)}
                                disabled={g.quantity === 1}>
                                <Ionicons name="remove" size={20} color={g.quantity === 1 ? '#888' : '#fff'} />
                            </Pressable>

                            <View style={CartitemStyle.qanutity}>
                                <Text style={CartitemStyle.qantityText}>{g.quantity}</Text>
                            </View>

                            <Pressable style={CartitemStyle.box}
                                onPress={() => incrementQuantity(g.id, g.size)}>
                                <Ionicons name="add" size={20} color="#fff" />
                            </Pressable>
                        </View>
                    </View>


                ))}
            </LinearGradient>
        </View>
    );
};

export default Cartitem;