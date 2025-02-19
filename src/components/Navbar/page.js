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
          <ul className={styles["flex"]}>
            <li>
              <Link href="/bicycles">Bicycles</Link>
            </li>
            <li>
              <Link href="/bicycles">Insurance</Link>
            </li>
            <li>
              <Link href="/bicycles">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
