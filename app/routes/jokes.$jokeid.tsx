import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeid },
  });

  if (!joke) {
    throw new Error("Joke not found");
  }

  return json({
    joke,
  });
};

export default function JokeRoute() {

  const { joke } = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here is your hilarious joke.</p>
      <p>{joke.content}
      </p>
      <Link to='.'>"{joke.name}" Permalink</Link>
    </div>
  );
}
