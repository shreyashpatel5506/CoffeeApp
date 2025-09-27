import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import myStore from '../store/store';

const Favourite = () => {
    const { FavouriteList, removeFromFavourite } = myStore();

    if (FavouriteList.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No favourites yet!</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={FavouriteList}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 15 }}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={item.imagelink_portrait} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.subText}>{item.special_ingredient}</Text>
                        <TouchableOpacity
                            style={styles.removeBtn}
                            onPress={() => removeFromFavourite(item.id)}
                        >
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: '#666',
    },
    removeBtn: {
        marginTop: 5,
        backgroundColor: '#FF6347',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    removeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Favourite;
