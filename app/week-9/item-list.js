"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  // State Variable
  const [sortBy, setSortBy] = useState("name");

  // Create a copy of the items array

  // Sort items by name or category
  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "grouped category") {
    // Group items by category and sort categories and items alphabetically
    items = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    // Sort categories alphabetically
    items = Object.keys(items)
      .sort()
      .reduce((acc, category) => {
        // Sort items within each category alphabetically
        acc[category] = items[category].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return acc;
      }, {});
  } else {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="m-5">
      <h2 className="text-xl font-bold">Sort by:</h2>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2  m-2 text-slate-700 ${
            sortBy === "name" ? " bg-gray-200 font-bold " : " bg-gray-100 "
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className={`px-4 py-2 m-2 text-slate-700${
            sortBy === "category" ? " bg-gray-200 font-bold " : " bg-gray-100 "
          }`}
          onClick={() => setSortBy("category")}
          //onClick={(e) => handleClick(e)}
        >
          Category
        </button>

        <button
          className={`px-4 py-2 m-2 text-slate-700${
            sortBy === "grouped category"
              ? " bg-gray-200 font-bold "
              : " bg-gray-100 "
          }`}
          onClick={() => setSortBy("grouped category")}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === "grouped category" ? (
        Object.keys(items).map((category) => (
          <div className="m-2" key={category}>
            <h2 className="font-bold capitalize text-3xl">{category}</h2>
            <ul>
              {items[category].map((item) => (
                <li key={item.id}>
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
