import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={item.imagelink_square} style={styles.image} />
                <View style={styles.ratingBadge}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.ratingText}>{item.ratings_count}</Text>
                </View>
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.special_ingredient}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>${item.prices[0].price}</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 180,
        borderRadius: 15,
        margin: 10,
        backgroundColor: '#1E1E1E',
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
        padding: 5,
    },
    image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    ratingBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#FF8C32',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    star: {
        color: '#fff',
        fontSize: 12,
        marginRight: 2,
    },
    ratingText: {
        color: '#fff',
        fontSize: 12,
    },
    details: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    subtitle: {
        fontSize: 12,
        color: '#aaa',
        marginVertical: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#FF8C32',
        borderRadius: 8,
        padding: 6,
    },
})

export default Card;
