// Components
import Image from "next/image";

// Fonts
import { Anta } from "next/font/google";
const anta = Anta({
  weight: ["400"],
  subsets: ["latin"],
});

// Styles
import styles from "./header.module.css";

// Images
import { logo, logoName } from "@img/";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className={styles["header-container"]}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles["logo"]} />
        </Link>
        <Link href="/">
          <span className={`${anta.className} ${styles["logo-name"]}`}> CyberWheel</span>
        </Link>
      </header>
    </>
  );
}
