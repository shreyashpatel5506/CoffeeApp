import React, { useState } from "react";
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

const ProductDetail = ({ route }) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(item.prices[0]);

    // Get actions and state from store
    const { FavouriteList, addToFavourite, removeFromFavourite, addToCart, cartList } = myStore();
    const isFavourite = FavouriteList.some(fav => fav.id === item.id);

    return (
        <ScrollView style={ProductStyles.container} showsVerticalScrollIndicator={true}>
            {/* Product Image with Favourite */}
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
                        color={isFavourite ? "red" : "#fff"}
                        size={26}
                    />
                </TouchableOpacity>
            </View>

            {/* Top Info Section */}
            <View style={ProductStyles.cardmain} >
                <Text style={ProductStyles.name}>{item.name}</Text>
                <Text style={ProductStyles.subText}>{item.special_ingredient}</Text>
                <Text style={ProductStyles.roast}>{item.roasted}</Text>

                {/* Ratings + Type */}
                <View style={ProductStyles.row}>
                    <AntDesign name="star" color="#f5a623" size={18} />
                    <Text style={ProductStyles.rating}>
                        {item.average_rating} ({item.ratings_count})
                    </Text>
                    <Text style={ProductStyles.type}>• {item.type}</Text>
                </View>
            </View>

            {/* Description */}
            <View style={ProductStyles.card}>
                <Text style={ProductStyles.sectionTitle}>About</Text>
                <Text style={ProductStyles.description}>{item.description}</Text>
            </View>

            {/* Size Options */}
            <View style={ProductStyles.card}>
                <Text style={ProductStyles.sectionTitle}>Choose Size</Text>
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
            </View>

            {/* Price + Add to Cart */}
            <View style={ProductStyles.bottomRow}>
                <View>
                    <Text style={ProductStyles.priceLabel}>Price</Text>
                    <Text style={ProductStyles.price}>
                        {selectedSize.currency} {selectedSize.price}
                    </Text>
                </View>
                <TouchableOpacity
                    style={ProductStyles.cartBtn}
                    onPress={() => addToCart(item, selectedSize.size)}
                >
                    <Text style={ProductStyles.cartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProductDetail;
