// ProductDetail.jsx

import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from "react-native-linear-gradient";
import { ProductStyles } from "../style";
import myStore from "../store/store";
import Coffee from "../assests/Coffee.svg"
import Bean from "../assests/Bean.svg"
import Milk from "../assests/milkdrop.svg"
import Location from "../assests/location.svg"
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(item.prices[0]);
    const {
        FavouriteList,
        addToFavourite,
        removeFromFavourite,
        addToCart,
    } = myStore();

    // Re-check for favourite status
    const isFavourite = FavouriteList.some(fav => fav.id === item.id);

    return (
        <ScrollView style={ProductStyles.container} showsVerticalScrollIndicator={true}>
            {/* Product Image with Favourite Button */}
            <View style={ProductStyles.imageWrapper}>
                <Image source={item.imagelink_portrait} style={ProductStyles.image} />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.6)"]}
                    style={ProductStyles.imageOverlay}
                />
                <TouchableOpacity
                    style={ProductStyles.heartBtn}
                    onPress={() => {
                        isFavourite ? removeFromFavourite(item.id) : addToFavourite(item);
                    }}
                >
                    <AntDesign
                        name={isFavourite ? "heart" : "hearto"}
                        color={isFavourite ? "#DC3535" : "#fff"}
                        size={26}
                    />
                </TouchableOpacity>
            </View>

            {/* Top Info Section */}
            <View style={ProductStyles.cardmain} >
                <View>
                    <View>
                        <Text style={ProductStyles.name}>{item.name}</Text>
                        <Text style={ProductStyles.subText}>{item.special_ingredient}</Text>
                        <Text style={ProductStyles.roast}>{item.roasted}</Text>
                    </View>

                    {/* Ratings + Type */}
                    <View style={ProductStyles.row}>
                        <AntDesign name="star" color="#f5a623" size={18} />
                        <Text style={ProductStyles.rating}>
                            {item.average_rating} ({item.ratings_count})
                        </Text>
                        <Text style={ProductStyles.type}>• {item.type}</Text>
                    </View>
                </View>
                <View style={ProductStyles.logos}>
                    {item.type === 'Coffee' ? (
                        <>
                            {/* Coffee Icon */}
                            < View style={ProductStyles.imagebox}>
                                <Coffee width={28} height={28} />
                                <Text style={ProductStyles.iconText}>Coffee</Text>
                            </View>

                            {/* Milk Icon */}
                            <View style={ProductStyles.imagebox}>
                                <Milk width={28} height={28} />
                                <Text style={ProductStyles.iconText}>Milk</Text>
                            </View>
                        </>
                    ) : (
                        <>
                            {/* Bean Icon */}
                            <View style={ProductStyles.imagebox}>
                                <Bean width={28} height={28} />
                                <Text style={ProductStyles.iconText}>Bean</Text>
                            </View>

                            {/* Location Icon */}
                            <View style={ProductStyles.imagebox}>
                                <Location width={28} height={28} />
                                <Text style={ProductStyles.iconText}>
                                    {item.ingredients /* e.g. Africa */}
                                </Text>
                            </View>
                        </>
                    )}
                </View>


            </View >


            {/* Description */}
            < View style={ProductStyles.card} >
                <Text style={ProductStyles.sectionTitle}>About</Text>
                <Text style={ProductStyles.description}>{item.description}</Text>
            </View >

            {/* Size Options */}
            < View style={ProductStyles.card} >
                <Text style={ProductStyles.sectionTitle}>Size</Text>
                <View style={ProductStyles.sizeRow}>
                    {item.prices.map((p) => (
                        <TouchableOpacity
                            key={p.size}
                            style={[
                                ProductStyles.sizeBtn,
                                selectedSize.size === p.size && ProductStyles.sizeBtnActive,
                            ]}
                            onPress={() => setSelectedSize(p)}
                        >
                            <Text
                                style={[
                                    ProductStyles.sizeText,
                                    selectedSize.size === p.size && ProductStyles.sizeTextActive,
                                ]}
                            >
                                {p.size}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View >

            {/* Price + Add to Cart Button */}
            < View style={ProductStyles.bottomRow} >
                {/* Price Display */}
                < View >
                    <Text style={ProductStyles.priceLabel}>Price</Text>
                    <Text style={ProductStyles.price}>
                        {selectedSize.currency} {selectedSize.price}
                    </Text>
                </View >

                {/* Add to Cart button */}
                < TouchableOpacity
                    style={ProductStyles.cartBtn}
                    onPress={() => {
                        addToCart(item, selectedSize.size);

                        navigation.navigate('MenuTabs', {
                            screen: 'CheckoutStack',
                            params: {
                                screen: 'Cart',
                            },
                        });
                    }}
                >
                    <Text style={ProductStyles.cartText}>Add to Cart</Text>
                </TouchableOpacity >
            </View >
        </ScrollView >
    );
};

export default ProductDetail;