import React from "react";
import { Nav } from "../components/Header/Nav";
import { SignInButton } from "../components/Header/SignInButton";

export function Menu() {
  return (
    <div className="bg-gray-800 sticky top-0 flex justify-center items-center flex-col">
      <div className="w-full bg-gray-900 h-20 flex justify-center items-center">
        <SignInButton />
      </div>

      <Nav />
    </div>
  );
}
