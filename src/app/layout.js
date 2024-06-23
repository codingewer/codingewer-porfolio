import "./globals.css";
import "../styles/topbar.css"
import "../styles/home.css"
import "../styles/pages.css"


export const metadata = {
  title: "codingewer",
  description: "AI and Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">{children}</body>
    </html>
  );
}
