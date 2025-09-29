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
        backgroundColor: "#0C0F14",
        padding: 15,
        paddingTop: 35
    },
    imageWrapper: {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 600,
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
        backgroundColor: "#0C0F14",
        padding: 15,
        borderRadius: 25,
    },
    card: {
        backgroundColor: "#1419215e",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,

    },
    cardmain: {
        backgroundColor: "#1419215e",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        marginTop: -154,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 25
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
    logos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 15
    },
    imagebox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 15,
        backgroundColor: '#141921',
        borderRadius: 25
    },
    iconText: {
        marginTop: 4,
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        fontFamily: "Poppins-Medium",
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
        borderStyle: "solid",
        borderColor: "#d17842",
        borderWidth: 2,
        borderRadius: 30,
        paddingVertical: 8,
        width: 80,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginRight: 10,
    },
    sizeBtnActive: {
        backgroundColor: "#D17842",
        borderColor: "#D17842",
    },
    sizeText: {
        color: "#fff",
        fontSize: 14,
        textAlign: 'center'
    },
    sizeTextActive: {
        color: "#fff",
        fontWeight: "bold",
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 60,
        paddingLeft: 10
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
        backgroundColor: "#D17842",
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

export const CartitemStyle = StyleSheet.create({
    container: {
        width: 350,
        height: 'auto',
        borderRadius: 25,
        backgroundColor: '#262B33',
        marginEnd: 12,
        padding: 10,
        margin: 20,

    },
    gradient: {
        flex: 1,
        borderRadius: 25,
        padding: 10,
    },
    FIRSTRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
        borderRadius: 25

    },
    imageContainer: {
        width: 140,
        height: 140,
        padding: 5,
        borderRadius: 10,
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },
    aboutsection: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 8,
    },
    name: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5,
        alignItems: 'baseline',
    },
    nameText: {
        width: 99,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: "Poppins-Regular",
        color: '#fff',
    },
    subText: {
        width: 93,
        fontSize: 12,
        lineHeight: 20,
        fontFamily: "Poppins-Regular",
        color: '#AEAEAE'
    },
    parent: {
        flex: 1,
        backgroundColor: "#141921",
        width: 100,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 6
    },
    subTextname: {
        width: 86,
        fontSize: 10,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        color: "#aeaeae",
        textAlign: "left"
    },
    sizeRow: {

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    size: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#18202eff',
        borderRadius: 10,
        marginRight: 10,

    },
    sizeText: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        color: "#fff",
        textAlign: "left"
    },
    text: {
        width: 61,
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        textAlign: "left"
    },
    text2: {
        color: "#d17842"
    },
    text3: {
        color: "#fff"
    },

    qanitityRow: {
        width: '100%',
        paddingVertical: 7,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    mulitplesizequnatity: {
        width: 200,

    },
    sizemultiqanitiy: {
        width: 100,
    },
    box: {
        width: 32,
        height: 32,
        borderRadius: 10, // square with rounded edges
        backgroundColor: "#FF8C32",
        justifyContent: "center",
        alignItems: "center",
    },
    qantityText: {

        fontSize: 16,
        lineHeight: 20,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color: "#fff",
        textAlign: "left"
    },
    qanutity: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderStyle: "solid",
        borderColor: "#d17842",
        borderWidth: 2,
        borderRadius: 5,

    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginLeft: 20,
    },
    delbutton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 15,
        padding: 4,
    }
})

export const CartStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    gradient: {
        flex: 1,
        width: '100%',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#232b3b',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 6,
    },
    innerCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#d17842',
    },
    emptyText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        fontFamily: ''
    },
    emptysubText: {
        fontSize: 18,
        color: "#757474ff"
    },
    totalContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 15
    },
    totalText: {
        width: 80,
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        color: "#aeaeae",
        textAlign: "left"
    },
    text: {
        width: 70,
        fontSize: 24,
        lineHeight: 24,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        textAlign: "left"
    },
    text2: {
        color: "#d17842"
    },
    text3: {
        color: "#aeaeae"
    },
    text4: {
        color: "#fff"
    },
    checkoutButton: {
        height: 60,
        width: 200,
        backgroundColor: "#d17842",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25
    },
    checkoutText: {
        fontSize: 20,

        fontWeight: "800",
        fontFamily: "Poppins-SemiBold",
        color: "#fff",
        textAlign: "center"
    },
    separator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginBottom: 25,
        alignItems: 'center',
        width: '100%',
    }
})

