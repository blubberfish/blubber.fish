import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen min-h-screen from-blue-800 to-violet-900 bg-gradient-to-br text-white">
      {children}
    </div>
  );
}
