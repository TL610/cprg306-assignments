export default function Item({ name, quantity, category }) {
  return (
    <section className="m-2 p-2 w-96 bg-blue-300 text-black ">
      <ul>
        <p className="text-2xl font-bold">{name}</p>
        <li className="text-lg">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
