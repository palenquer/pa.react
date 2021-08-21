import Head from "next/head";
import { GetStaticProps } from "next";
import { SiReact } from "react-icons/si";
import { stripe } from "../services/stripe";
import SubscribeButton from "../components/SubscribeButton";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | pa.react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-grow justify-center flex-col p-4 xl:px-60">
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between">
          <div className="max-w-xl mt-8 md:mt-0">
            <span className="text-2xl">👋 Hey, welcome</span>

            <h1 className="text-5xl font-bold mt-4">
              News about the <span className="text-blue-300">React </span>
              world.
            </h1>

            <p className="text-2xl mt-8 font-bold">
              Get access to all the publications
              <span className="text-blue-300"> for {product.amount} month</span>
            </p>

            <SubscribeButton priceId={product.priceId} />
          </div>

          <SiReact className="w-52 h-52 md:w-80 md:h-80 text-blue-300" />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1J88HpIRs38hqTB5bESlo1xj");

  const product = {
    priceId: price.id,

    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    }
  };
};
