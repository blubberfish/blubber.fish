import { ClerkProvider } from "@clerk/nextjs";

function getConfig() {
  return {
    clerk: {
      allowedOrigin: (
        process.env.NEXT_PUBLIC_X_CLERK_ALLOW_ORIGIN?.split(",") || []
      )
        .map((fragment): string => {
          if (URL.canParse(fragment)) {
            return new URL(fragment).origin;
          }
          if (/^:\d+$/.test(fragment)) {
            return `http://localhost${fragment}`;
          }
          return "";
        })
        .filter(Boolean) satisfies string[],
    },
  };
}

export default function Layout({ children }: LayoutProps<"/auth">) {
  const { clerk } = getConfig();
  return (
    <ClerkProvider allowedRedirectOrigins={clerk.allowedOrigin}>
      {children}
    </ClerkProvider>
  );
}
