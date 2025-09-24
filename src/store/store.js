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

    // ---------- ACTIONS ----------
    addToCart: (item, size = "S") => {
        const { cartList, cartPrice } = get();
        const priceObj = item.prices.find(p => p.size === size) || item.prices[0];
        const itemPrice = parseFloat(priceObj.price);

        // Check if item of the same size already exists
        const updatedCart = cartList.map(cartItem => {
            if (cartItem.id === item.id && cartItem.size === size) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });

        // Add new item if it wasn't found
        const itemExists = cartList.some(
            cartItem => cartItem.id === item.id && cartItem.size === size
        );
        const newCartList = itemExists
            ? updatedCart
            : [...cartList, { ...item, quantity: 1, size }];

        set({
            cartList: newCartList,
            cartPrice: cartPrice + itemPrice,
        });
    },

    removeFromCart: (itemId, size = "S") => {
        const { cartList, cartPrice } = get();
        const targetItem = cartList.find(
            cartItem => cartItem.id === itemId && cartItem.size === size
        );
        if (!targetItem) return;

        const priceObj =
            targetItem.prices.find(p => p.size === size) || targetItem.prices[0];
        const itemPrice = parseFloat(priceObj.price);

        let newCartList;
        if (targetItem.quantity > 1) {
            newCartList = cartList.map(cartItem =>
                cartItem.id === itemId && cartItem.size === size
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        } else {
            newCartList = cartList.filter(
                cartItem => !(cartItem.id === itemId && cartItem.size === size)
            );
        }

        set({
            cartList: newCartList,
            cartPrice: Math.max(cartPrice - itemPrice, 0),
        });
    },

    clearCart: () => set({ cartList: [], cartPrice: 0 }),

    addToFavourite: item =>
        set(state => {
            if (state.FavouriteList.some(fav => fav.id === item.id)) return {};
            return { FavouriteList: [...state.FavouriteList, item] };
        }),

    removeFromFavourite: itemId =>
        set(state => ({
            FavouriteList: state.FavouriteList.filter(fav => fav.id !== itemId),
        })),

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

    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: Math.max(state.count - 1, 0) })),
    reset: () => set({ count: 0 }),
}));

export default myStore;
