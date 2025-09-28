export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-6 mt-8">{children}</main>;
}