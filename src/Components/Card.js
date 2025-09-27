import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CardStyle } from "../style.js"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Card = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={CardStyle.cardContainer}
            onPress={() => navigation.navigate("ProductDetail", { item })}
        >
            <LinearGradient
                colors={['#242a35ff', '#313b4bff']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
            >

                <View style={CardStyle.imageContainer}>
                    <Image source={item.imagelink_portrait} style={CardStyle.image} />
                    <View style={CardStyle.ratingBadge}>
                        <Text style={CardStyle.star}>★</Text>
                        <Text style={CardStyle.ratingText}>{item.average_rating}</Text>
                    </View>
                </View>

                <View style={CardStyle.details}>
                    <Text style={CardStyle.title}>{item.name}</Text>
                    <Text style={CardStyle.subtitle}>{item.special_ingredient}</Text>
                    m/
                    <View style={CardStyle.footer}>
                        <Text style={CardStyle.price}><Text style={CardStyle.sign}>$ </Text>{item.prices[0].price}</Text>
                        <Ionicons name="add-circle" size={24} color="#FF8C32" />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity >
    )
}



export default Card;
