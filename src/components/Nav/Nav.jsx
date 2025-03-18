/* eslint-disable no-unused-vars */
import React from "react";
import "../../index.css";
import { useCart } from '../../context';
import { Link } from "@tanstack/react-router";

export const Nav = () => {
  const { cart } = useCart();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-rose-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Six Year Anniversary Gift
        </span>
      </div>
      <div className="flex items-center">
        <Link to="/cart" className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white transition-colors duration-300 ease-in-out group-hover:text-rose-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-4 -right-4 bg-rose-500 text-white rounded-full px-2 py-1 text-xs font-bold transition-colors duration-300 ease-in-out group-hover:bg-rose-700">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};
