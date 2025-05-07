
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useCart } from '../../context';

export const CartDisplay = () => {
    const { cart, clearCart, removeFromCart } = useCart();
    const [ email, setEmail ] = useState("");
    const [ name, setName ] =  useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(`Email: ${email}`);

        if(!validateEmail(email)) { 
            alert("Email address is not valid, please try again.");
            setEmail("");
            return;
        }

        if(cart.length > 3) {
            alert("Too many items in the cart, a max of 3 gifts is allowed.");
            return;
        }

        if (cart.length === 0) {
            alert("Please select at least one gift before submitting.");
            return;
        }

        // Prepare the data for the API request
        const giftNames = cart.map(item => item.name);
        const requestData = {
            name,
            email,
            gifts: giftNames
        };

        try {
            const response = await fetch('https://anniversary-gift-backend.onrender.com/api/gift-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            alert("Your gift selection has been submitted successfully!");
            
            // Clear the form and cart after successful submission
            setName("");
            setEmail("");
            clearCart();
        } catch (error) {
            console.error('Error:', error);
            alert("There was a problem submitting your gift selection. Please try again.");
        }
    }

    return (
        <>
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
                                <button 
                                    onClick={() => removeFromCart(item)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs ml-auto"
                                >
                                    Remove
                                </button>
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
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Ready to Submit?</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button 
                    onClick={handleSubmit}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    );
};