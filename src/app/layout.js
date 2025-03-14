
// Next JS Google Ftons
import { Kanit } from "next/font/google";
const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CyberCycle",
  description: "Futuristic bicycles for the modern world",
};

// Components
import { Header, NavBar, Footer } from "@/components";

// Styles
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className={styles["header-navbar-container"]}>
          <Header />
          <NavBar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
