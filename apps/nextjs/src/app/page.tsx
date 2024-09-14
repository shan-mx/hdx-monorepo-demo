import { Suspense } from "react";

import { api, HydrateClient } from "~/trpc/server";

export default async function HomePage() {
  const posts = await api.post.all();

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary">T3</span> Turbo
        </h1>
        <div className="w-full max-w-2xl overflow-y-scroll">
          POSTS
          <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">Loading...</div>
            }
          >
            {posts.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
