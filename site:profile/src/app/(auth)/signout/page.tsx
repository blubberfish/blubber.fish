import auth from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  await auth.api.signOut({ headers: await headers() });
  return (
    <div>
      <h1 className="text-2xl font-bold">Signed Out</h1>
      <p className="mt-2">You have been signed out successfully.</p>  
    </div>
  )

}