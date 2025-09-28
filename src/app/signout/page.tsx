import auth from "@lib/auth";
import { ArrowLeft } from "iconoir-react";
import { headers } from "next/headers";

export default async function Page() {
  const requestHeaders = await headers();
  console.log("Request Headers:", Object.fromEntries(requestHeaders.entries()));
  await auth.api.signOut({ headers: await headers() });
  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Signed out</h1>
        <p className="mt-2">You have been signed out successfully.</p>
      </header>
      <a className="block w-max p-4 rounded bg-blue-50 text-violet-900 cursor-pointer hover:ring-4 hover:ring-blue-300" href={requestHeaders.get("referrer") || "/"}>
        <ArrowLeft className="size-4 inline-block align-middle" />
        <span className="align-middle ml-2">Go back to application</span>
      </a>
    </>
  );
}
