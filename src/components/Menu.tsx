import React from "react";
import { Nav } from "../components/Header/Nav";
import { SignInButton } from "../components/Header/SignInButton";

export function Menu() {
  return (
    <div className="bg-gray-900 sticky top-0 flex justify-center items-center flex-col z-20 w-screen border-b-2 border-gray-700">
      <div className="w-full flex justify-center items-center h-20">
        <SignInButton />
      </div>

      <Nav />
    </div>
  );
}
