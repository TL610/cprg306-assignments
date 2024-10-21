export default function Item({ name, quantity, category }) {
  return (
    <section className="m-2 p-2 w-80 bg-sky-400">
      <ul>
        <p className="text-2xl font-bold">{name}</p>
        <li className="text-lg">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
