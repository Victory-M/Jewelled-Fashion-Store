import React, { useState } from "react";
// Icon
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

import { UilAngleDown } from "@iconscout/react-unicons";
import { useCart } from "../context/Context";
import productsItem from "../data/items.json";
import CartItem from "./CartItem";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleCart = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  const { cartItems, cartQuantity } = useCart();

  return (
    <div>
      <div className="flex justify-between text-white bg-red-700 md:py-4 md:px-16 px-7 py-2 ">
        <h1 className="uppercase font-bold text-2xl">jewelled</h1>
        <div
          className="border bg-white text-black  rounded-xl flex justify-center items-center cursor-pointer relative md:py-2 md:px-3 py-1 px-2"
          onClick={() => toggleCart()}
        >
          <UilShoppingCartAlt
            size={25}
            className="hover:scale-110 md:text-xl sm:text-lg "
          />
          <sup className=" font-semibold text-base ">{cartQuantity}</sup>
          <UilAngleDown className="ml-1" />
        </div>
        {toggle && (
          <div className=" absolute top-14 right-2  bg-white text-black p-4  shadow-2xl shadow-black md:right-4 md:top-20 ">
            {cartQuantity > 0 ? (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </>
            ) : (
              <h1>Cart is empty!</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
