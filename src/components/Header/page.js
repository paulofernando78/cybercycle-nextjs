// Components
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

// Images
import { logo, logoName } from "@img/";

export function Header() {
  return (
    <>
      <header className={styles["flex"]}>
        <Image src={logo} alt="Logo" className={styles["logo"]} />
        <Image src={logoName} alt="Logo Name" className={styles["logo-name"]} />
      </header>
    </>
  );
}
