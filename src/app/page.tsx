import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Fun Fridays</h1>
      <ul>
        <li>
          <Link href="/citydle">Citydle</Link>
        </li>
      </ul>
    </div>
  );
}
