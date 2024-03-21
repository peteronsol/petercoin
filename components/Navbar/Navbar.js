import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import RenderMobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <link
        href="https://fonts.googleapis.com/css2?family=Patua+One&family=Protest+Riot&display=swap"
        rel="stylesheet"
      ></link>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/images/logo.jpg"
            alt="Logo"
            width={70}
            height={70}
            className={styles.rounded}
          />
          <p className={styles.navtext}>PETER</p>

          <ul className={styles.linksHolder}>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="story"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                to="Roadmap"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="Buy"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                How To Buy
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuContent}>
          <RenderMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
