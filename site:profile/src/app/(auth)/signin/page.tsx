import { Suspense } from "react";
import { SignInButton, RequireSession, ResumeUserButton } from "./_components";

export default async function Page({}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="w-full max-w-sm mx-auto pt-16">
      <header>
        <h1 className="text-2xl font-bold">BlubberFish</h1>
        <p className="mt-2">Log in to see your applications</p>
      </header>
      <section className="mt-6">
        <Suspense>
          <RequireSession
            ifNot={
              <nav className="flex flex-col gap-3">
                <SignInButton />
              </nav>
            }
          >
            <>
              <h1 className="text-2xl mb-4">Continue as</h1>
              <ResumeUserButton />
              <a
                className="inline-block mt-4 text-blue-300 hover:underline"
                href="/signout"
              >
                Use a different account
              </a>
            </>
          </RequireSession>
        </Suspense>
      </section>
    </main>
  );
}
