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

const BLUBBER_FISH_REGEX = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*blubber\.fish$/i;

export default function Layout({ children }: LayoutProps<"/auth">) {
  const { clerk } = getConfig();
  return (
    <ClerkProvider
      allowedRedirectOrigins={[
        ...clerk.allowedOrigin,
        BLUBBER_FISH_REGEX,
      ]}
    >
      {children}
    </ClerkProvider>
  );
}
