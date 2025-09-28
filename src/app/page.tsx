import { getSession } from "@/lib/auth";
import { SignInButton } from "@/lib/auth/client";
import { headers } from "next/headers";

export default async function Page() {
  const requestHeaders = await headers();
  console.log("Request Headers:", Object.fromEntries(requestHeaders.entries()));
  const session = await getSession({ headers: await headers() });
  return (
    <main className="mx-6 mt-8">
      <section>
        <h1 className="text-2xl text-gray-100">
          {session ? "Resume last session" : "Sign in"}
        </h1>
        <p className="font-light text-sm">
          {session
            ? "You are currently signed in"
            : "Sign in or create an account for free"}
        </p>
        <nav className="flex flex-col mt-8">
          {session ? (
            <>
              <a className="block p-4 rounded-md hover:ring-4 hover:ring-blue-300 bg-blue-50 text-violet-900 text-gray-800">
                {session.user.image ? (
                  <img
                    alt="user avatar"
                    className="align-middle inline-block size-12 rounded overflow-hidden"
                    src={session.user.image}
                  />
                ) : null}
                <div className="align-middle inline-flex flex-col ml-4">
                  <p className="mb-1">{session.user.name}</p>
                  <p className="text-sm">{session.user.email}</p>
                </div>
              </a>
              <a
                className="cursor-pointer mt-6 text-blue-300 hover:underline"
                href="/signout"
              >
                Use a different account
              </a>
            </>
          ) : (
            <>
              <SignInButton
                authProvider="github"
                className="px-6 py-4 rounded-md bg-white/85 text-gray-800 font-bold border hover:ring-4 hover:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                GitHub
              </SignInButton>
            </>
          )}
        </nav>
      </section>
    </main>
  );
}
