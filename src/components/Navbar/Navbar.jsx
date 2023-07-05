import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);
  return (
    <div
      className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}
    >
      <section className={styles.left}>
        <div className={styles.logoPart}>
          <a href="/">
            <img src="../../../public/Logo.jpg" alt="FoodW" />
          </a>
        </div>
      </section>
      <section className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="basil:cross-outline" height="40" />
          ) : (
            <Icon icon="ci:hamburger-md" height="40" />
          )}
        </button>
          <ul className={styles.links}>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <a to="/">HOME</a>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <a to="/resources">ABOUT</a>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <a to="/create-article">SERVICES</a>
            </li>
            <li
              className={({ isActive }) =>
                isActive
                  ? `${styles.navlinks} ${styles.active}`
                  : styles.navlinks
              }
            >
              <a to="/create-article">CONTACT US</a>
            </li>
          </ul>
      </section>
    </div>
  );
};

export default Navbar;
