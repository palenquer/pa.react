import React from "react";

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className="bg-yellow-400 text-gray-900 w-40 rounded-full h-12 font-bold transition mt-4 hover:text-white filter hover:brightness-90"
    >
      Subscribe now
    </button>
  );
}
