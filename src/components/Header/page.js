// Components
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

// Images
import { logo, logoName } from "@img/";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className={styles["flex"]}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles["logo"]} />
        </Link>
        <Link href="/">
          <Image
            src={logoName}
            alt="Logo Name"
            className={styles["logo-name"]}
          />
        </Link>
      </header>
    </>
  );
}
