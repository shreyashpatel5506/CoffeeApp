import { View, Text } from 'react-native'
import React from 'react'
import myStore from '../store/store'

export default function firstPage() {
    const { CoffeeList, BeansList } = myStore();
    console.log(CoffeeList, BeansList);

    return (
        <View>
            <Text>firstPage</Text>
        </View>
    )
}