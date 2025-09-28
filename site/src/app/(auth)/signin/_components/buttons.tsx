"use client";

import { signIn, signOut } from "@lib/auth/client";
import { ButtonHTMLAttributes, useEffect, useState } from "react";

function BaseButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-50 text-violet-900 hover:ring-4 hover:ring-violet-300"
      {...props}
    />
  );
}

export function SignInButton() {
  const [pending, setPending] = useState<Promise<unknown>>();
  useEffect(() => {
    if (!pending) return;
    let unmounted = false;
    pending
      .then((data) => {
        console.log("Signed in", { data });
      })
      .finally(() => {
        if (unmounted) return;
        setPending(() => undefined);
      });
    return () => {
      unmounted = true;
    };
  }, [pending]);
  return (
    <BaseButton
      disabled={!!pending}
      type="button"
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set("redirect", "/signin");
        setPending(
          signIn.social({
            provider: "github",
            callbackURL: url.toString(),
          })
        );
      }}
    >
      Sign in with GitHub
    </BaseButton>
  );
}

export function SignOutButton() {
  const [pending, setPending] = useState<Promise<unknown>>();
  useEffect(() => {
    if (!pending) return;
    let unmounted = false;
    pending
      .then((data) => {
        console.log("Signed in", { data });
      })
      .finally(() => {
        if (unmounted) return;
        setPending(() => undefined);
      });
    return () => {
      unmounted = true;
    };
  }, [pending]);
  return (
    <BaseButton
      disabled={!!pending}
      type="button"
      onClick={() => {
        setPending(signOut());
      }}
    >
      Sign out
    </BaseButton>
  );
}
