/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./___root";

import GiftsList from "../components/GiftsList/GiftsList";
import { Hero } from "../components/Hero/Hero";


function Index() {

  return (
    <>
      <Hero />
      <div className="md:container md:mx-auto">
        <section className="mt-10">
          <div className="lg:columns-3 gap-4 md:columns-2 sm:columns-1">
                <GiftsList />
          </div>
        </section>
      </div>
    </>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});
