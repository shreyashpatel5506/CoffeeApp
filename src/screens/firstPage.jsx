import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import myStore from '../store/store'
import Card from "../Components/Card.js"

export default function FirstPage() {
    const { CoffeeList, BeansList } = myStore();
    console.log(CoffeeList, BeansList);

    return (
        <View>
            <FlatList
                data={CoffeeList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Card item={item} />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
