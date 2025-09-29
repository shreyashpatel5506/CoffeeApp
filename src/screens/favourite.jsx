import myStore from '../store/store';
import FavouriteCard from '../Components/FavouriteCard';
import { FavouriteStyle } from '../style';
import { FlatList, View, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const Favourite = () => {
    const FavouriteList = myStore((state) => state.FavouriteList);     // ✅ subscribe
    const removeFromFavourite = myStore((state) => state.removeFromFavourite);

    console.log('FavouriteList:', FavouriteList); // should log updates

    if (FavouriteList.length === 0) {
        return (
            <View style={FavouriteStyle.emptyContainer}>
                <LinearGradient
                    colors={['#131e30ff', 'rgba(29, 42, 66, 1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={FavouriteStyle.gradient}
                >
                    <Text style={FavouriteStyle.emptyText}>No favourites yet!</Text>
                </LinearGradient>
            </View>
        );
    }

    return (
        <View style={FavouriteStyle.container}>
            <LinearGradient
                colors={['#131e30ff', 'rgba(29, 42, 66, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={FavouriteStyle.gradient}
            >
                <FlatList
                    data={FavouriteList}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={FavouriteStyle.listContent}
                    renderItem={({ item }) => <FavouriteCard item={item} />}
                />
            </LinearGradient>
        </View>
    );
};
export default Favourite;