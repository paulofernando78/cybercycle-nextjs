// Components
import { Header } from "@/components/Header/page";
import { Navbar } from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

import { Kanit } from "next/font/google";

// Fonts
const kanit = Kanit({
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "CyberCycle",
  description: "The Future is here.",
};

// Styles
import "./globals.css";
import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className={styles["header-navbar-flex"]}>
          <Header />
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
