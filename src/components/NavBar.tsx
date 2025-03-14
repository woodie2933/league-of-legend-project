import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black w-screen fixed px-5">
      <div className="container flex justify-between items-center p-6">
        <Link href="/" className="text-xl font-bold text-white">
          League of Legend
        </Link>
        <div className="space-x-16">
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
