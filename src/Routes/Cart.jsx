// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from './___root';
import { CartDisplay } from '../components/CartDisplay/CartDisplay';
import { Link } from "@tanstack/react-router"

function Cart() {
    return (
        <div className="container mx-auto px-4">
            <div className="mt-10">
                <Link to="/" className="text-rose-800 hover:underline">Back to Gifts</Link>
            </div>
            <div className="mt-10">
                <CartDisplay />
            </div>
        </div>
    )
}

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/cart",
    component: Cart
});
