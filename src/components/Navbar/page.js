// Compenents
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

export function Navbar() {
  return (
    <>
      <header>
        <ul className={styles["flex"]}>
          <li>Bicycles</li>
          <li>Insurance</li>
          <li>Contact</li>
        </ul>
      </header>
    </>
  );
}
