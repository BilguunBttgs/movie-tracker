export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="size-full h-screen flex-center-col p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
