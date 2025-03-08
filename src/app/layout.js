// Components
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

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

// Styles
import "./globals.css";
import styles from "./layout.module.css";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className={styles["header-navbar-container"]}>
          <Header />
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
