import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState, useMemo } from 'react'
import myStore from '../store/store'
import Card from "../Components/Card.js"

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
        <ScrollView style={styles.container}>
            {/* 🔸 Header */}
            <View style={styles.box}>
                <Text style={styles.firstText}>Find the best{"\n"}coffee for you</Text>
            </View>

            {/* 🔸 Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
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
                            styles.categoryButton,
                            selectedCategoryCoffee === item && styles.activeCategory,
                        ]}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategoryCoffee === item && styles.activeText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            {/* 🔸 Coffee list */}
            <Text style={styles.sectionTitle}>Coffee</Text>
            <FlatList
                data={filterCoffeeData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Card item={item} />}
            />

            {/* 🔸 Beans Section */}
            <Text style={styles.sectionTitle}>Coffee beans</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "#fff", // you can change to "#000" if you want dark theme
    },
    box: {
        marginTop: 20,
        marginBottom: 10,
    },
    firstText: {
        fontSize: 28,
        fontWeight: "700",
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
    },
    activeCategory: {
        backgroundColor: "#007BFF",
    },
    categoryText: {
        color: "#333",
        fontWeight: "600",
    },
    activeText: {
        color: "#fff",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 15,
    },
    searchContainer: {
        marginVertical: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
        color: '#333',
    },

});
