// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext, useEffect } from 'react';

const GiftContext = createContext();
const CartContext = createContext();

export const GiftProvider = ({ children }) => {
    const [gifts, setGifts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("/data/data.json")
          .then((response) => {
            if(!response.ok) {
                throw new Error(`HTTP ERROR. Status ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setGifts(data.gifts);
            setLoading(false);
          })
          .catch((e) => {
            console.error("Error fetching gifts.", e);
            setError(e.message);
            setLoading(false);
          });
      }, []);

      return (
        <GiftContext.Provider value={{gifts, loading, error}}>
            {children}
        </GiftContext.Provider>
      )
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (gift) => {
        setCart((prevCart) => [...prevCart, gift]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useGifts = () => {
    return useContext(GiftContext);
}

export const useCart = () => {
    return useContext(CartContext);
}