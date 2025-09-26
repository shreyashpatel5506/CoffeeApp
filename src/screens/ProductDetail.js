import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductDetail = ({ route }) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(item.prices[0]);
    const [favourite, setFavourite] = useState(item.favourite);

    return (
        <ScrollView style={styles.container}>
            {/* Product Image with Favourite */}

            <View>
                <Image source={item.imagelink_portrait} style={styles.image} />
                <TouchableOpacity
                    style={styles.heartBtn}
                    onPress={() => setFavourite(!favourite)}
                >
                    <Icon
                        name={favourite ? "heart" : "heart-outline"}
                        size={28}
                        color={favourite ? "red" : "#fff"}
                    />
                    <AntDesign name={favourite ? "hearto" : "heart"} color={favourite ? "red" : "#fff"} size={24} />
                </TouchableOpacity>
            </View>

            {/* Top Info Section */}
            <View style={styles.infoBox}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subText}>{item.special_ingredient}</Text>
                <Text style={styles.roast}>{item.roasted}</Text>

                {/* Ratings + Type */}
                <View style={styles.row}>
                    <AntDesign name="star" color="#f5a623" size={18} />
                    <Text style={styles.rating}>
                        {item.average_rating} ({item.ratings_count})
                    </Text>
                    <Text style={styles.type}>{item.type}</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.description}>{item.description}</Text>

            {/* Size Options */}
            <View style={styles.sizeRow}>
                {item.prices.map((p) => (
                    <TouchableOpacity
                        key={p.size}
                        style={[
                            styles.sizeBtn,
                            selectedSize.size === p.size && styles.sizeBtnActive,
                        ]}
                        onPress={() => setSelectedSize(p)}
                    >
                        <Text
                            style={[
                                styles.sizeText,
                                selectedSize.size === p.size && styles.sizeTextActive,
                            ]}
                        >
                            {p.size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Price + Add to Cart */}
            <View style={styles.bottomRow}>
                <Text style={styles.price}>
                    {selectedSize.currency} {selectedSize.price}
                </Text>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 15,
        paddingBottom: 20,
    },
    image: {
        width: "100%",

        borderRadius: 15,
    },
    heartBtn: {
        position: "absolute",
        right: 20,
        top: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 8,
        borderRadius: 50,
    },
    infoBox: {
        marginTop: -99,
        backgroundColor: "rgba(255,255,255,0.3)",
        color: 'black',

    },
    name: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
    },
    subText: {
        color: "#3d3d3dff",
        fontSize: 14,
        marginTop: 2,
    },
    roast: {
        color: "#5e5e5eff",
        marginTop: 2,
        fontSize: 13,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    rating: {
        color: "#fff",
        marginLeft: 5,
    },
    type: {
        color: "#bbb",
        marginLeft: 10,
    },
    description: {
        color: "#ddd",
        marginVertical: 15,
        fontSize: 14,
        lineHeight: 20,
    },
    sizeRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    sizeBtn: {
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    sizeBtnActive: {
        backgroundColor: "#f08c00",
        borderColor: "#f08c00",
    },
    sizeText: {
        color: "#fff",
        fontSize: 14,
    },
    sizeTextActive: {
        color: "#fff",
        fontWeight: "bold",
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
        paddingBottom: 10,
    },
    price: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    cartBtn: {
        backgroundColor: "#f08c00",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 12,
    },
    cartText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
