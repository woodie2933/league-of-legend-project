import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          League of Legend
        </Link>
        <div className="space-x-4">
          <Link href="/champions" className="text-white hover:text-green-300">
            CHAMPIONS
          </Link>
          <Link href="/items" className="text-white hover:text-green-300">
            ITEM
          </Link>
          <Link href="/rotation" className="text-white hover:text-green-300">
            WEEKLY ROTATION
          </Link>
        </div>
      </div>
    </nav>
  );
}
