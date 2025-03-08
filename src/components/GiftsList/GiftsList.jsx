/* eslint-disable no-unused-vars */
import React from "react";
import GiftCard from "../GiftsCard/GiftsCard";

const GiftsList = ({Gift, AddToCart}) => {
    return(
        <>
        <div className="mb-4 break-inside-avoid">
                <GiftCard Gift={Gift} AddToCart={AddToCart} />
        </div>

        </>
    )
}

export default GiftsList;