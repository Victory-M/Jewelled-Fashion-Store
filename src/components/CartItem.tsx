import { useCart } from "../context/Context";
import itemItems from "../data/items.json";
import { UilTrash } from "@iconscout/react-unicons";
import { useState } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useCart();
  const item = itemItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <span className="flex justify-between gap-4 mb-4 ">
      <img
        src={item.image}
        alt={item.name}
        className=" h-14 w-14 shadow-sm shadow-slate-600"
      />
      <div className="flex flex-col">
        <span className=" text-base font-semibold capitalize ">
          {item.name}
        </span>
        <span>$ {item.price}</span>
      </div>
      <UilTrash
        className=" cursor-pointer hover:scale-110 "
        onClick={() => removeFromCart(id)}
      />
    </span>
  );
};

export default CartItem;
