import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto md:h-20 text-white md:mr-8">
      <Link href="/">
        <a className="text-gray-200 hover:text-white w-full md:w-20 h-20 flex justify-center items-center hover:border-b-2 border-yellow-400 hover:font-bold">
          Home
        </a>
      </Link>

      <Link href="/posts">
        <a className="text-gray-200 hover:text-white w-full md:w-20 h-20 flex justify-center items-center hover:border-b-2 border-yellow-400 hover:font-bold">
          Posts
        </a>
      </Link>

      <Link href="/about">
        <a className="text-gray-200 hover:text-white w-full md:w-20 h-20 flex justify-center items-center hover:border-b-2 border-yellow-400 hover:font-bold">
          About
        </a>
      </Link>
    </nav>
  );
}
