"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="m-5">
      <table className="bg-slate-100 m-auto ">
        <tr className="h-10">
          <th className="w-20">
            <p className="text-black">{quantity}</p>
          </th>
          <th>
            <button
              onClick={decrement}
              className="
              w-9 rounded 
            text-slate-100 
            bg-blue-400 
            hover:bg-blue-700
            disabled:bg-gray-400 "
              disabled={quantity === 1}
            >
              -
            </button>
          </th>
          <th>
            <button
              onClick={increment}
              className="
              w-9 rounded 
            text-slate-100 
            bg-blue-400 
            hover:bg-blue-700
            disabled:bg-gray-400 "
              disabled={quantity === 20}
            >
              +
            </button>
          </th>
          <th className="w-2"></th>
        </tr>
      </table>
    </div>
  );
}
