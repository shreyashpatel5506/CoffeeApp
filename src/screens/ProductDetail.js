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
import LinearGradient from "react-native-linear-gradient";

const ProductDetail = ({ route }) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(item.prices[0]);
    const [favourite, setFavourite] = useState(item.favourite);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Product Image with Favourite */}
            <View style={styles.imageWrapper}>
                <Image source={item.imagelink_portrait} style={styles.image} />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.6)"]}
                    style={styles.imageOverlay}
                />
                <TouchableOpacity
                    style={styles.heartBtn}
                    onPress={() => setFavourite(!favourite)}
                >
                    <AntDesign
                        name={favourite ? "heart" : "hearto"}
                        color={favourite ? "red" : "#fff"}
                        size={26}
                    />
                </TouchableOpacity>
            </View>

            {/* Top Info Section */}
            <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subText}>{item.special_ingredient}</Text>
                <Text style={styles.roast}>{item.roasted}</Text>

                {/* Ratings + Type */}
                <View style={styles.row}>
                    <AntDesign name="star" color="#f5a623" size={18} />
                    <Text style={styles.rating}>
                        {item.average_rating} ({item.ratings_count})
                    </Text>
                    <Text style={styles.type}>• {item.type}</Text>
                </View>
            </View>

            {/* Description */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>

            {/* Size Options */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Choose Size</Text>
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
            </View>

            {/* Price + Add to Cart */}
            <View style={styles.bottomRow}>
                <View>
                    <Text style={styles.priceLabel}>Price</Text>
                    <Text style={styles.price}>
                        {selectedSize.currency} {selectedSize.price}
                    </Text>
                </View>
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
    },
    imageWrapper: {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 320,
        borderRadius: 20,
    },
    imageOverlay: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "40%",
    },
    heartBtn: {
        position: "absolute",
        right: 20,
        top: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 50,
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },
    name: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    subText: {
        color: "#ccc",
        fontSize: 14,
        marginTop: 3,
    },
    roast: {
        color: "#aaa",
        marginTop: 3,
        fontSize: 13,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    rating: {
        color: "#fff",
        marginLeft: 5,
    },
    type: {
        color: "#bbb",
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8,
    },
    description: {
        color: "#ddd",
        fontSize: 14,
        lineHeight: 20,
    },
    sizeRow: {
        flexDirection: "row",
        marginTop: 10,
    },
    sizeBtn: {
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 30, // pill style
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
        marginTop: 20,
        marginBottom: 30,
    },
    priceLabel: {
        color: "#aaa",
        fontSize: 13,
    },
    price: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 3,
    },
    cartBtn: {
        backgroundColor: "#f08c00",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        shadowColor: "#f08c00",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    cartText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
