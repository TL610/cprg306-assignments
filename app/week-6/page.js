import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-2 mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
