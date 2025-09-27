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

        backgroundColor: "#101724ff", // dark theme
    },
    firstText: {
        fontSize: 28,
        fontWeight: "700",
        color: 'white',
        marginTop: 60,
        left: 25,
    },
    searchContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    searchInput: {
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 20,
        backgroundColor: "#1E1F28",
        fontSize: 16,
        color: '#fff',
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        backgroundColor: "#1E1F28",
        marginRight: 10,
        marginLeft: 10
    },
    activeCategory: {
        backgroundColor: "#D17842", // orange highlight
    },
    categoryText: {
        color: "#ccc",
        fontWeight: '800',
    },
    activeText: {
        color: "#fff",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "white",
        marginVertical: 15,
        marginLeft: 15,
    },
});

export const CardStyle = StyleSheet.create({
    cardContainer: {
        width: 180,
        height: 270,
        borderRadius: 15,
        margin: 10,
        backgroundColor: '#1E1E1E',
        overflow: 'hidden',

    },
    imageContainer: {
        position: 'relative',
        padding: 15,
        overflow: 'hidden',
    },
    image: {
        width: 150,
        height: 150,
        objectFit: 'cover',

        borderRadius: 15,
        overflow: 'hidden',
    },
    ratingBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: '#00000094',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 4,
        overflow: 'hidden'
    },
    star: {
        color: '#D17842',
        fontSize: 12,
        marginRight: 2,
    },
    ratingText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontStyle: 'bold'
    },
    details: {
        padding: 10,
        paddingTop: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    subtitle: {
        fontSize: 12,
        color: '#aaa',
        marginVertical: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#FF8C32',
        borderRadius: 8,
        padding: 6,
    },
    sign: {
        color: '#FF8C32',
        marginRight: 3
    }
})