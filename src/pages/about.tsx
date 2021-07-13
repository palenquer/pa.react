import React from "react";
import {
  SiLinkedin,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextDotJs,
  SiGit,
  SiElixir,
  SiVueDotJs,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import profilePic from "../assets/foto_perfil.jpg";
import Link from "next/link";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About | pa.react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-grow justify-center flex-col p-4 xl:px-60">
        <div className="flex gap-8 flex-col-reverse md:flex-row justify-between items-center">
          <section className="max-w-xs lg:max-w-sm md:mt-0 flex flex-col justify-center items-center text-center md:text-left">
            <div className="mb-4 w-full">
              <h2>Hello, I'm</h2>
              <h1 className="text-5xl font-bold">Paulo Alenquer</h1>
            </div>

            <h1 className="text-3xl">
              I'm studying{" "}
              <span className="text-blue-300 font-bold">React</span> since 2020
              and I'm looking for a job.
            </h1>

            <div className="mt-8 w-full md:block flex justify-center items-center flex-col">
              <h3>I have experience in:</h3>

              <span className="text-yellow-300 font-bold text-2xl flex items-center gap-2">
                <SiJavascript className="w-5 h-5" />
                Javascript
              </span>

              <span className="text-red-400 font-bold text-2xl flex items-center gap-2">
                <SiHtml5 className="w-5 h-5" />
                HTML
              </span>

              <span className="text-blue-400 font-bold text-2xl flex items-center gap-2">
                <SiCss3 className="w-5 h-5" />
                CSS
              </span>

              <span className="text-blue-300 font-bold text-2xl flex items-center gap-2">
                <SiReact className="w-5 h-5" />
                ReactJS
              </span>

              <span className="text-gray-400 font-bold text-2xl flex items-center gap-2">
                <SiNextDotJs className="w-5 h-5" />
                NextJS
              </span>

              <span className="text-pink-400 font-bold text-2xl flex items-center gap-2">
                <SiGit className="w-5 h-5" />
                Git
              </span>
            </div>

            <div className="mt-4 w-full md:block flex justify-center items-center flex-col">
              <h3>I have interest in:</h3>

              <span className="text-purple-400 font-bold text-2xl flex items-center gap-2">
                <SiElixir className="w-5 h-5" />
                Elixir
              </span>

              <span className="text-green-300 font-bold text-2xl flex items-center gap-2">
                <SiVueDotJs className="w-5 h-5" />
                VueJS
              </span>
            </div>

            <div className="mt-8 w-full flex md:block justify-center items-center flex-col">
              <h4>You can find me at:</h4>

              <div className="gap-4 mt-2 flex justify-center md:justify-start items-center">
                <Link href="https://www.linkedin.com/in/pauloalenquer/">
                  <a className="hover:text-gray-400">
                    <SiLinkedin className="w-10 h-10" />
                  </a>
                </Link>

                <Link href="https://github.com/palenquer">
                  <a className="hover:text-gray-400">
                    <FaGithub className="w-10 h-10" />
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <div className="w-full h-0.5 md:h-full md:w-0.5 bg-gray-700" />

          <section className="flex justify-center flex-col items-center">
            <Image
              className="mt-8 md:mt-0 rounded-full"
              width={300}
              height={300}
              src={profilePic}
              alt="Foto de Perfil"
              layout="intrinsic"
              placeholder="blur"
              priority
            />
            
            <div className="mt-4 flex flex-col">
              <h3>
                Age:<span className="text-sm text-gray-300 ml-2">24</span>
              </h3>
              <h3>
                Location:
                <span className="text-sm text-gray-300 ml-2">
                  Brazil, Rio de Janeiro, RJ
                </span>
              </h3>
              <h3>
                Email:
                <span className="text-sm text-gray-300 ml-2">
                  pauloalenquer@gmail.com
                </span>
              </h3>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
