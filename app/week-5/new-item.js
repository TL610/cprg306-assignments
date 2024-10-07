"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const reset = () => {
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    //Create an item object with the current values of name, quantity, and category.
    const item = {
      Name: name,
      Quantity: quantity,
      Item: category,
    };
    //Log the item object to the console
    console.log("Item:", item);
    // Display an alert with the current item values
    alert(
      "Name: " + name + " Quantity: " + quantity + " Category: " + category
    );
    // Reset the state variables to their initial values
    reset();
  };

  return (
    // Line 1
    <div
      className="
    bg-slate-100 m-20 p-4 w-96"
    >
      <div className="flex content-center">
        <input
          className="w-96 h-10 rounded-lg p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name" // placeholder - hint text
          required // required attribute
        />
      </div>

      <div className=" flex mt-4">
        <div className="flex-1 p-2">
          <p className="text-black font-bold text-center">{quantity}</p>
        </div>
        <div className="flex-1">
          <button
            onClick={decrement}
            className="
              w-9 m-2 rounded 
            text-slate-100 
            bg-blue-400 
            hover:bg-blue-700
            disabled:bg-gray-400 "
            disabled={quantity === 1}
          >
            -
          </button>
        </div>
        <div className="flex-1">
          <button
            onClick={increment}
            className="
              w-9 m-2 rounded 
            text-slate-100 
            bg-blue-400 
            hover:bg-blue-700
            disabled:bg-gray-400 "
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
        <div className="flex">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-40"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={handleSubmit}
          className="
          font-bold
          h-9 w-96 mt-4 rounded-lg
          text-slate-100 
          bg-blue-400 
          hover:bg-blue-700"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}
