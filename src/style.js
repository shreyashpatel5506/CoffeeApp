import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const WelcomeStyle = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: width * 0.7,
        height: height * 0.25,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
    },
    para: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    button: {
        width: width * 0.6,
        height: 50,
        backgroundColor: '#00512C',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});

export const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 15,
    },
    imageWrapper: {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 320,
        borderRadius: 20,
    },
    imageOverlay: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "40%",
    },
    heartBtn: {
        position: "absolute",
        right: 20,
        top: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 50,
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },
    name: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    subText: {
        color: "#ccc",
        fontSize: 14,
        marginTop: 3,
    },
    roast: {
        color: "#aaa",
        marginTop: 3,
        fontSize: 13,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    rating: {
        color: "#fff",
        marginLeft: 5,
    },
    type: {
        color: "#bbb",
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8,
    },
    description: {
        color: "#ddd",
        fontSize: 14,
        lineHeight: 20,
    },
    sizeRow: {
        flexDirection: "row",
        marginTop: 10,
    },
    sizeBtn: {
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 30, // pill style
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    sizeBtnActive: {
        backgroundColor: "#f08c00",
        borderColor: "#f08c00",
    },
    sizeText: {
        color: "#fff",
        fontSize: 14,
    },
    sizeTextActive: {
        color: "#fff",
        fontWeight: "bold",
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    priceLabel: {
        color: "#aaa",
        fontSize: 13,
    },
    price: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 3,
    },
    cartBtn: {
        backgroundColor: "#f08c00",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        shadowColor: "#f08c00",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
    cartText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export const HomeStyles = StyleSheet.create({
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
