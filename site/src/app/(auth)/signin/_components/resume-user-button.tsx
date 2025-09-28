import { getSession } from "@lib/auth";
import { User } from "iconoir-react";
import { headers } from "next/headers";

export async function ResumeUserButton({ url }: { url?: string }) {
  const session = await getSession({ headers: await headers() });
  if (!session) return null;

  const avatar = session.user.image;
  const email = session.user.email;
  const name = session.user.name;
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <a
      href={url || "/profile"}
      className="grid grid-cols-[max-content_1fr] grid-rows-[repeat(2,min-content)] gap-x-4 p-4 rounded-md bg-blue-50 hover:ring-4 hover:ring-ring-offset-1 hover:ring-blue-300 text-black"
    >
      {avatar ? (
        <img
          className="size-12 col-start-1 col-span-1 row-start-1 row-span-full rounded"
          alt="avatar"
          src={avatar}
        />
      ) : (
        <div className="size-12 col-start-1 col-span-1 row-start-1 row-span-full  p-2 overflow-hidden rounded-full from-black/13 to-black/21 bg-gradient-to-br">
          <center>{initials}</center>
        </div>
      )}
      <p className="text-gray-900 text-lg">{name}</p>
      <p className="text-gray-900 text-sm">{email}</p>
    </a>
  );
}
