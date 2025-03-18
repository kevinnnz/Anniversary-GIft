/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Nav } from "../components/Nav/Nav";
import { CartProvider, GiftProvider } from "../context";

export const Route = createRootRoute({
  component: () => {
    return (
      <GiftProvider>
        <CartProvider>
          <Nav />
          <Outlet />
          {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
        </CartProvider>
      </GiftProvider>
    );
  },
});

export const rootRoute = createRootRoute({
  component: Route,
});

