import Head from "next/head";
import { SiReact } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | pa.react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-grow justify-center flex-col p-4 xl:px-60">
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between">
          <div className="max-w-xl mt-8 md:mt-0">
            <span className="text-xl">👋 Hey, welcome</span>

            <h1 className="text-5xl font-bold mt-4">
              News about the <span className="text-blue-300">React</span>{" "}
              world.
            </h1>

            <p className="text-lg mt-8">
              Get access to all publications for <br />
              <span className="text-blue-300 font-bold">$4.90 month</span>
            </p>

            <button
              type="button"
              className="bg-yellow-400 text-gray-900 w-40 rounded-full h-12 font-bold transition hover:bg-yellow-500 mt-4 hover:text-white"
            >
              Subscribe now
            </button>
          </div>

          <SiReact className="w-52 h-52 md:w-72 md:h-72 text-blue-300" />
        </div>
      </main>
    </>
  );
}
