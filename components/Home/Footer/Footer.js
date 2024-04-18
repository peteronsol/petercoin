import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const LineStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    margin: "10px 0",
    position: "relative",
  };

  return (
    <section id="contact" className={styles.main}>
      <div style={LineStyle}> </div>
      <div className={styles.headingHolder}>
        <h1
          data-aos="fade-in"
          data-aos-duration="1700"
          className={styles.headings}
        >
          Contact
        </h1>
      </div>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <a
            data-aos="flip-right"
            data-aos-duration="1000"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/peteronsolana?t=ASIBUulWTKwTO88wgNlflQ&s=09"
            title="Follow us on X/Twitter"
          >
            <Image
              className={styles.circleButton}
              alt="Follow us on X/Twitter"
              src="/assets/images/x-twitter-icon.png"
              height={60}
              width={60}
            />
          </a>
          <a
            data-aos="flip-right"
            data-aos-duration="1000"
            target="_blank"
            rel="noreferrer"
            href="https://t.me/peteronsols"
            title="Join our Telegram"
          >
            <Image
              className={styles.circleButton}
              src="/assets/images/telegram-icon.png"
              alt="telegram"
              width={60}
              height={60}
            />
          </a>
        </div>
        <p
          data-aos="zoom-out"
          data-aos-duration="1000"
          className={styles.heading}
        >
          $PETER coin has no association with FOX/Disney or the writers of
          Family Guy. <br></br>
          This token is simply paying homage to a character/meme we all love and
          recognize.
          <br></br>
          <br></br>
          $PETER is a memecoin with no intrinsic value or expectation of
          financial return.<br></br> There is no formal team. The coin is for
          entertainment purposes only.
        </p>
      </div>
    </section>
  );
};

export default Footer;
