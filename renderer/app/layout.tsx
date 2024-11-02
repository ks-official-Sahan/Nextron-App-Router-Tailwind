import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Test App",
  description: "Nextron with Tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
