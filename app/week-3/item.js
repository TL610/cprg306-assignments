export default function Item({ name, quantity, category, number }) {
  return (
    <section className="m-2 bg-azure- w-[40%]">
      <ul>
        <p className="text-4x1 font-bold mt-2">{name}</p>
        <li className="text-1g">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
