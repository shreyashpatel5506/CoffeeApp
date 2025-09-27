import { View, Text, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useMemo } from 'react'
import myStore from '../store/store'
import Card from "../Components/Card.js"
import { HomeStyles } from '../style.js'

export default function Home() {
    const { CoffeeList, BeansList } = myStore();
    const [searchQuery, setSearchQuery] = useState("");
    // ✅ Categories (from CoffeeList)
    const CategoryList = useMemo(() => {
        const allcategories = CoffeeList.map((item) => item.name); // use category instead of name
        const uniqueCategories = ["All", ...new Set(allcategories)];
        return uniqueCategories;
    }, [CoffeeList]);

    const [selectedCategoryCoffee, setSelectedCategoryCoffee] = useState("All");

    // ✅ Filter coffee list
    const filterCoffeeData =
        selectedCategoryCoffee === "All"
            ? CoffeeList
            : CoffeeList.filter(item => item.name === selectedCategoryCoffee);

    return (
        <ScrollView style={HomeStyles.container}>
            {/* 🔸 Header */}
            <View style={HomeStyles.box}>
                <Text style={HomeStyles.firstText}>Find the best{"\n"}coffee for you</Text>
            </View>

            {/* 🔸 Search Bar */}
            <View style={HomeStyles.searchContainer}>
                <TextInput
                    style={HomeStyles.searchInput}
                    placeholder="Search coffee..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            {/* 🔸 Category chips */}
            <FlatList
                data={CategoryList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ marginVertical: 10 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedCategoryCoffee(item)}
                        style={[
                            HomeStyles.categoryButton,
                            selectedCategoryCoffee === item && HomeStyles.activeCategory,
                        ]}
                    >
                        <Text
                            style={[
                                HomeStyles.categoryText,
                                selectedCategoryCoffee === item && HomeStyles.activeText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            {/* 🔸 Coffee list */}
            <Text style={HomeStyles.sectionTitle}>Coffee</Text>
            <FlatList
                data={filterCoffeeData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card item={item} />}
            />

            {/* 🔸 Beans Section */}
            <Text style={HomeStyles.sectionTitle}>Coffee beans</Text>
            <FlatList
                data={BeansList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card item={item} />}
            />
        </ScrollView>
    );
}


