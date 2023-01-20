import "../styles/globals.css";
import Header from "./Header";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
