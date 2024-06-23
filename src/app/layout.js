import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/topbar.css"
import "../styles/home.css"
import "../styles/projects.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "codingewer",
  description: "AI and Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
