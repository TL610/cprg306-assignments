import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Teresa Lok</h1>
      <ul>
        <li>
          <Link href="https://github.com/TL610?tab=repositories">
            My GitHub
          </Link>
        </li>
      </ul>
    </main>
  );
}
