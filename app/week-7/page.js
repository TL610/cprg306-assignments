"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-2 mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
