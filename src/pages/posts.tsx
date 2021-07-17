import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HiHeart } from "react-icons/hi";

interface Posts {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  positive_reactions_count: number;
  url: URL;
  tag_list: [];
}
interface PostsProps {
  posts: Posts[];
}

export default function posts({ posts }: PostsProps) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Posts | pa.react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-grow items-center justify-center flex-col p-4 xl:px-60 gap-4">
        {session ? (
          posts.map((post) => {
            return (
              <Link href={post.url} key={post.id}>
                <a>
                  <article className="hover:bg-gray-700 w-full max-w-xl bg-gray-800 md:h-40 h-60 rounded-md px-4 md:px-8 py-4 flex flex-col justify-between">
                    <div>
                      <h1>{post.title}</h1>
                      <h4 className="text-gray-300 mt-2">{post.description}</h4>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row">
                      <h5 className="text-gray-400">
                        {post.readable_publish_date}
                      </h5>
                      <div className="flex items-center">
                        {post.tag_list.map((tag) => {
                          return (
                            <span key={Math.random()} className="text-gray-400 mr-1">#{tag}</span>
                          );
                        })}
                        <div className="ml-2 flex items-center">
                          <HiHeart className="text-red-400 h-5 w-5 mr-1" />
                          <h5>{post.positive_reactions_count}</h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </Link>
            );
          })
        ) : (
          <h1>Please Sign in to see all posts.</h1>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=palenquer");
  const posts: Posts[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
