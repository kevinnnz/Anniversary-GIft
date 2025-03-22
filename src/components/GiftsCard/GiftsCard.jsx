// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useCart } from "../../context";

const GiftCard = ({ Gift }) => {
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState(false)

  const handleAddingToCart = (Gift) => {
    setAddingToCart(true);
    addToCart(Gift);

    const timeOut = setTimeout(() => {
      setAddingToCart(false);
    }, 1000)

    return () => clearTimeout(timeOut);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{Gift.name}</h2>
        <p className="text-gray-600">{Gift.description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${addingToCart ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handleAddingToCart(Gift)}
          disabled={addingToCart}
        >
          { addingToCart ? "Adding to cart..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
