import { IoMdClose } from "react-icons/io"

export function SignInButton() {
  const isOn = false;

  return isOn ? (
    <button className="flex items-center justify-between w-44 px-4 rounded-full border-2 border-green-400 h-10 transition hover:bg-green-400 font-bold text-white">
      Paulo Alenquer
      <IoMdClose className="text-white w-5 h-5"/>
    </button>
  ) : (
    <button className="w-40 rounded-full border-2 border-blue-400 h-10 transition hover:bg-blue-400 font-bold text-white">
      Sign In
    </button>
  );
}
