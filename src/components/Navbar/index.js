// Styles
import styles from "./styles.module.css";
import Link from "next/link";

const links = [
  {
    title: "Bicycles",
    href: "/bicycles",
  },
  {
    title: "Insurance",
    href: "/insurance",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <ul className={styles["link-container"]}>
            {links.map((link, linkIndex) => (
              <li key={linkIndex} className={styles["btn-border"]}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
