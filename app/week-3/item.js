export default function Item({ name, quantity, category, number }) {
  return (
    <section className="m-2 w-[30%] bg-cyan-400">
      <ul>
        <p className="text-2xl font-bold mt-2">{name}</p>
        <li className="text-lg">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
