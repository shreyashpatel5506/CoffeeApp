import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/coffee.js";
import BeansData from "../data/Beans.js";

const myStore = create((set, get) => ({
    // ---------- STATE ----------
    count: 0,
    CoffeeList: CoffeeData,
    BeansList: BeansData,
    FavouriteList: [],
    cartList: [],
    cartPrice: 0,
    OrderHistory: [],

    // ---------- CART ACTIONS ----------

    /**
     * Adds an item to the cart or increments its quantity if it already exists.
     * Stores the unitPrice to ensure accurate quantity/price updates later.
     * @param {Object} item - The full item object.
     * @param {string} size - The selected size (e.g., 'S', 'M', 'L').
     */
    addToCart: (item, size) => {
        const { cartList } = get();

        // 1. Find the price object for the selected size
        const priceObj = item.prices.find(p => p.size === size) || item.prices[0];
        const itemPrice = parseFloat(priceObj.price);

        // 2. Check if item of the same size already exists
        const existingItemIndex = cartList.findIndex(
            cartItem => cartItem.id === item.id && cartItem.size === size
        );

        let newCartList;
        if (existingItemIndex !== -1) {
            // Item exists, increase quantity
            newCartList = cartList.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    const newQuantity = cartItem.quantity + 1;
                    const newPrice = newQuantity * cartItem.unitPrice;
                    return { ...cartItem, quantity: newQuantity, price: newPrice };
                }
                return cartItem;
            });
        } else {
            // Item is new, add it
            const newCartItem = {
                ...item,
                quantity: 1,
                size: size,
                unitPrice: itemPrice, // Store the unit price
                price: itemPrice, // Initial total price for 1 quantity
            };
            newCartList = [...cartList, newCartItem];
        }

        // 3. Recalculate total cart price
        const newCartPrice = newCartList.reduce((acc, item) => acc + item.price, 0);

        set({
            cartList: newCartList,
            cartPrice: newCartPrice,
        });
    },

    /**
     * Increases the quantity of a specific item in the cart.
     * @param {string} id - The ID of the item.
     * @param {string} size - The size of the item.
     */
    incrementQuantity: (id, size) => {
        const { cartList } = get();
        const updatedCartList = cartList.map(item => {
            if (item.id === id && item.size === size) {
                const newQuantity = item.quantity + 1;
                const newPrice = newQuantity * item.unitPrice;
                return { ...item, quantity: newQuantity, price: newPrice };
            }
            return item;
        });

        const newCartPrice = updatedCartList.reduce((acc, item) => acc + item.price, 0);

        set({
            cartList: updatedCartList,
            cartPrice: newCartPrice,
        });
    },

    /**
     * Decreases the quantity of a specific item. Removes the item if quantity hits 0.
     * @param {string} id - The ID of the item.
     * @param {string} size - The size of the item.
     */
    decrementQuantity: (id, size) => {
        const { cartList } = get();

        const existingItemIndex = cartList.findIndex(
            cartItem => cartItem.id === id && cartItem.size === size
        );

        if (existingItemIndex === -1) return;

        const itemToUpdate = cartList[existingItemIndex];

        let newCartList;
        if (itemToUpdate.quantity > 1) {
            // Decrease quantity (Quantity > 1)
            newCartList = cartList.map((item, index) => {
                if (index === existingItemIndex) {
                    const newQuantity = item.quantity - 1;
                    const newPrice = newQuantity * item.unitPrice;
                    return { ...item, quantity: newQuantity, price: newPrice };
                }
                return item;
            });
        } else {
            // Remove item entirely (Quantity = 1)
            newCartList = cartList.filter((_, index) => index !== existingItemIndex);
        }

        const newCartPrice = newCartList.reduce((acc, item) => acc + item.price, 0);

        set({
            cartList: newCartList,
            cartPrice: newCartPrice,
        });
    },

    /**
     * Removes all units of a specific item and size from the cart.
     * @param {string} id - The ID of the item.
     * @param {string} size - The size of the item.
     */
    removeItemFully: (id, size) => {
        const { cartList } = get();

        const newCartList = cartList.filter(
            cartItem => !(cartItem.id === id && cartItem.size === size)
        );

        const newCartPrice = newCartList.reduce((acc, item) => acc + item.price, 0);

        set({
            cartList: newCartList,
            cartPrice: newCartPrice,
        });
    },

    clearCart: () => set({ cartList: [], cartPrice: 0 }),

    // ---------- FAVOURITE ACTIONS ----------

    addToFavourite: item =>
        set(state => {
            if (state.FavouriteList.some(fav => fav.id === item.id)) return {};
            return { FavouriteList: [...state.FavouriteList, item] };
        }),

    removeFromFavourite: itemId =>
        set(state => ({
            FavouriteList: state.FavouriteList.filter(fav => fav.id !== itemId),
        })),

    // ---------- ORDER HISTORY ACTIONS ----------

    addOrder: async order => {
        const newOrderHistory = [...get().OrderHistory, order];
        set({ OrderHistory: newOrderHistory });
        try {
            await AsyncStorage.setItem("OrderHistory", JSON.stringify(newOrderHistory));
        } catch (error) {
            console.error("Failed to save order history:", error);
        }
    },

    loadOrderHistory: async () => {
        try {
            const storedOrders = await AsyncStorage.getItem("OrderHistory");
            if (storedOrders) {
                set({ OrderHistory: JSON.parse(storedOrders) });
            }
        } catch (error) {
            console.error("Failed to load order history:", error);
        }
    },

    // ---------- UTILITY ACTIONS (Example) ----------

    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: Math.max(state.count - 1, 0) })),
    reset: () => set({ count: 0 }),
}));

export default myStore;