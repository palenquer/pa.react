import Link from "next/link";
import { Nav } from "./Nav";
import { HiMenuAlt3 } from "react-icons/hi";
import { SignInButton } from "./SignInButton";

interface HeaderProps {
  toggleIsOn: () => void;
}

export function Header({ toggleIsOn }: HeaderProps) {
  return (
    <header className="h-20 flex z-50 sticky top-0 bg-gray-900 border-b-2 border-gray-800">
      <div className="container mx-auto flex justify-between text-white px-4 items-center xl:px-60">
        <Link href="/">
          <a className="text-4xl font-bold group">
            pa<span className="text-blue-300 group-hover:text-yellow-400">.</span>react
          </a>
        </Link>

        <div className="hidden md:flex items-center">
          <Nav />
          <SignInButton />
        </div>
      </div>

      <button
        type="button"
        className="md:hidden h-20 w-28 flex items-center justify-center"
        onClick={toggleIsOn}
      >
        <HiMenuAlt3 className="w-10 h-10 text-white" />
      </button>
    </header>
  );
}
