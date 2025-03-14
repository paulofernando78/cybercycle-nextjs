// Styles
import styles from "./Navbar.module.css";
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

const NavBar = () => {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <ul className={styles["link-container"]}>
            {links.map((link, linkIndex) => (
              <li key={linkIndex} className={styles["link-border"]}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
