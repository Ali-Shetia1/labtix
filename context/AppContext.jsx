"use client"
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext();
export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = (props) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY;
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const {user, isSignedIn} = useUser();

    const fetchProductData = () => {
        setProducts(productsDummyData);
    }

    const fetchUserData = () => {
        if (user.publicMetadata.role === "seller") {
            setIsSeller(true)
        }
        setUserData(userDummyData);
    }

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartItems[itemId] += 1;
        }
        else {
            cartItems[itemId] = 1
        }
        setCartItems(cartData);
    }

    const updateCartQuantity = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        }
        else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCount += cartItems[item]
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item);
            if (cartItems[item] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[item];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    useEffect(() => {
        fetchUserData();
    }, [])

    const value = {
        user, isSignedIn,
        currency, router,
        isSeller, setIsSeller,
        userData, fetchUserData,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
