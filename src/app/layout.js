import "./globals.css";
import "../styles/topbar.css";
import "../styles/home.css";
import "../styles/pages.css";
import Head from "next/head";

export const metadata = {
  title: "codingewer",
  description: "AI and Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="App">{children}</body>
    </html>
  );
}
