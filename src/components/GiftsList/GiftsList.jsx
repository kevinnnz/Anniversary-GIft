/* eslint-disable no-unused-vars */
import React from "react";
import GiftCard from "../GiftsCard/GiftsCard";

import { useGifts } from '../../context';

const GiftsList = () => {
  const { gifts, loading, error } = useGifts();

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error Loading gifts: {error}</div>
  if (!gifts || gifts.length === 0) return <div>No gifts available.</div>;

  return (
    <>
        { gifts.map((gift, index) => (
          <div key={index} className="mb-4">
            <GiftCard Gift={gift} />
          </div>
        ))}
    </>
  );
};

export default GiftsList;
