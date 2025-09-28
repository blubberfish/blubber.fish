import { getSession } from "@lib/auth";
import { headers } from "next/headers";
import type { PropsWithChildren, ReactNode } from "react";

export async function RequireSession({
  children,
  ifNot,
}: PropsWithChildren<{ ifNot?: ReactNode }>) {
  const session = await getSession({ headers: await headers() });
  if (session) {
    return children;
  }
  return ifNot;
}
