import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black w-screen fixed px-10 z-50">
      <div className="container flex justify-between items-center p-6">
        <Link href="/" className="text-3xl font-bold text-white">
          League of Legend
        </Link>
        <div className="space-x-16 text-lg">
          <Link
            href="/champions"
            className="text-white transition-all duration-300 hover:text-green-300"
          >
            CHAMPIONS
          </Link>
          <Link
            href="/items"
            className="text-white transition-all duration-300 hover:text-green-300"
          >
            ITEM
          </Link>
          <Link
            href="/rotation"
            className="text-white transition-all duration-300 hover:text-green-300"
          >
            WEEKLY ROTATION
          </Link>
        </div>
      </div>
    </nav>
  );
}
