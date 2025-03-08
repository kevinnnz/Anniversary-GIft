// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import GiftsList from "./components/GiftsList/GiftsList";

const App = () => {
    const [cart, setCart] = useState([]);
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        fetch("/data/data.json")
            .then(response => response.json())
            .then(data => {
                setGifts(data.gifts)
            })
    }, [])

    const addToCart = (gift) => {
      setCart(prevCart => [...prevCart, gift]);
      console.log(cart)
    }

    return(
      <>
        <nav className="flex items-center justify-between flex-wrap bg-rose-400 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Six Year Anniversary Gift</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-4 -right-4 bg-rose-500 text-white rounded-full px-2 py-1 text-xs font-bold">{cart.length}</span>
            </div>
          </div>
        </nav>
        <div className="md:container md:mx-auto">
        <section className="bg-rose-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-black text-5xl mb-6 text-rose-800">Happy Anniversary!</h1>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                We are so excited you chose to celebrate your 6 year Anniversary with me. I can't believe time
                has flown by! 6 years ago I was blindsided while I was about to go on a run and told you I lived
                at High Park station when in fact I lived at my parents in Etobicoke! Now look at us... we've been to
                Poland, Halifax, Ireland, England, France, Denver, Montreal, Ottawa and who can forget the summers 
                at the cottage?!? As a token of my appreciation I would love for you to select a gift as a sign of 
                gratitude for putting up with my craziness!
              </p>
              <p className="text-xl font-semibold text-rose-600">Love, Kevin</p>
            </div>
          </div>
        </section>
        <section>
            <div className="columns-3 gap-4">
                {
                    gifts.map((gift, index) => {
                        return <GiftsList 
                          key={index} 
                          Gift={gift}
                          AddToCart={() => addToCart(gift)}
                        />
                    })
                }
            </div>
        </section>
      </div>
      </>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
