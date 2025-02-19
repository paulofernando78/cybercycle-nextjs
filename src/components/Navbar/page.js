// Compenents
import Image from "next/image";

// Styles
import styles from "./styles.module.css";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <ul className={styles["link-container"]}>
            <li className={styles["btn-border"]}>
              <Link href="/bicycles">Bicycles</Link>
            </li>
            <li className={styles["btn-border"]}>
              <Link href="/contact">Insurance</Link>
            </li>
            <li className={styles["btn-border"]}>
              <Link href="/insurance">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
