
import React from 'react'
import myStore from "../store/store.js"
import { ProductStyles, FavouriteCardStyle } from "../style.js"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from "react-native-linear-gradient";
import Coffee from "../assests/Coffee.svg"
import Bean from "../assests/Bean.svg"
import Milk from "../assests/milkdrop.svg"
import Location from "../assests/location.svg"

const FavouriteCard = ({ item }) => {
    const FavouriteList = myStore((state) => state.FavouriteList);     // ✅ subscribe
    const addToFavourite = myStore((state) => state.addToFavourite);
    const removeFromFavourite = myStore((state) => state.removeFromFavourite);

    const isFavourite = FavouriteList.some((fav) => fav.id === item.id);

    return (
        <View style={FavouriteCardStyle.container}>


            <View style={ProductStyles.imageWrapper}>
                <Image source={item.imagelink_portrait} style={[ProductStyles.image, FavouriteCardStyle.image]} />
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


            <View style={ProductStyles.cardmain} >
                <View>
                    <View>
                        <Text style={ProductStyles.name}>{item.name}</Text>
                        <Text style={ProductStyles.subText}>{item.special_ingredient}</Text>
                        <Text style={ProductStyles.roast}>{item.roasted}</Text>
                    </View>


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



            < View style={[ProductStyles.card, FavouriteCardStyle.card]} >
                <Text style={ProductStyles.sectionTitle}>About</Text>
                <Text style={ProductStyles.description}>{item.description.substring(0, 150)} ....</Text>
            </View >
        </View>


    )
}

export default FavouriteCard