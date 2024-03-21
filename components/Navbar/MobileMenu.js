import React, { useState } from "react";
import {Link} from 'react-scroll';
import Image from "next/image";
import styles from "./MobileMenu.module.css";
import {CgMenuRound} from 'react-icons/cg'
import { CgCloseO } from "react-icons/cg";

const MobileMenu = () => {

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };


  const hamburgerIcon = <CgMenuRound className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>
  const closeIcon = <CgCloseO className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>

  

  return (
    <nav role="navigation" >
      <link href="https://fonts.googleapis.com/css2?family=Patua+One&family=Protest+Riot&display=swap" rel="stylesheet"></link>
      <div className={styles.logo}>
      <Image src="/assets/images/logo.jpg" alt="Logo" width={70} height={70}  />
      <p className={styles.navtext}>PETER</p></div>
      <div className={styles.menuToggle} >
      
      
      {isNavbarOpen && (
           <ul className={styles.menu} >
           <li  >
                   <Link to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar} > Home </Link>
                 </li>
                 <li  >
                   <Link to="about" spy={true} smooth={true} offset={-30} duration={500} onClick={closeNavbar} > About Us </Link>
                 </li>
                 <li  >
                   <Link to="story" spy={true} smooth={true} offset={-30} duration={500} onClick={closeNavbar}> Tokenomics </Link>
                 </li>
                 <li>
                  <Link to="Roadmap" spy={true} smooth={true} offset={-60} duration={500} onClick={closeNavbar}>  Roadmap </Link>      </li>
                 <li >
                   <Link to="Buy" spy={true} smooth={true} offset={-60} duration={500} onClick={closeNavbar} > How To Buy </Link>
                 </li>
                 <li >
                   <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar} > Contact </Link>
                 </li>
                   </ul>)}

           
      </div>
      {isNavbarOpen ? closeIcon : hamburgerIcon }
    </nav>
  );
};

export default MobileMenu;
