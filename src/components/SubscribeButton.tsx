import { useSession, signIn } from "next-auth/client";
import React from "react";
import { api } from "../services/api";
import { getStripeJs } from "../services/stripe-js";

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({sessionId});
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className="bg-yellow-400 text-gray-900 w-40 rounded-full h-12 font-bold transition mt-4 hover:text-white filter hover:brightness-90"
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
