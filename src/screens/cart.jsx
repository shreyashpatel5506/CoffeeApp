import { View, Text } from 'react-native'
import React from 'react'
import myStore from '../store/store'

const cart = () => {
    const { cartList } = myStore();
    return (
        <View>
            <Text>cart</Text>
        </View>
    )
}

export default cart