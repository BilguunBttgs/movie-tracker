export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="size-full h-screen flex-center-col p-5">{children}</main>
  );
}
