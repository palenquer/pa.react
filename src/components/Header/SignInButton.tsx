import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export function SignInButton() {
  const isOn = false;

  return isOn ? (
    <button className="flex items-center justify-between w-auto px-4 gap-2 rounded-full border-2 border-green-400 h-10 transition hover:bg-green-400 font-bold text-white group">
      <FaGithub className="w-5 h-5 text-green-400 group-hover:text-white transition"/>
      Paulo Alenquer
      <IoMdClose className="text-white w-5 h-5" />
    </button>
  ) : (
    <button className="w-auto gap-2 rounded-full border-2 border-yellow-400 h-10 transition hover:bg-yellow-400 hover:text-gray-800 font-bold text-white flex justify-between items-center px-4 group">
      <FaGithub className="w-5 h-5 text-yellow-400 group-hover:text-gray-800 transition"/>
      Sign In with github
    </button>
  );
}
