"use client";

import { ButtonHTMLAttributes, useState } from "react";
import { signIn } from "../auth";

export function SignInButton({
  authProvider,
  disabled,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { authProvider: string }) {
  const [pending, setPending] = useState<Promise<unknown>>();
  return (
    <button
      disabled={disabled || !!pending}
      onClick={() => {
        setPending(
          signIn.social({
            provider: authProvider,
          })
        );
      }}
      type="button"
      {...props}
    />
  );
}
