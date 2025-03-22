
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../../context';

export const CartDisplay = () => {
    const { cart, clearCart } = useCart();

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="divide-y divide-gray-200">
                        {cart.map((item, index) => (
                            <li key={index} className="py-4 flex">
                                <img className="h-10 w-10 rounded-full" src={item.image} alt={item.name} />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={clearCart}
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};