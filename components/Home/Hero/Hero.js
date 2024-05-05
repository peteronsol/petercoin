import Image from "next/image";
import styles from "./Hero.module.css";
import { useRef } from "react";

const Hero = () => {
  const styledTextRef = useRef(null);

  const copyToClipboard = () => {
    const textToCopy = styledTextRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div>
      <section id="hero" className={styles.main}>
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.content}
        >
          <p className={styles.ptext}>$PETER</p>
          <p className={styles.pdescription}>
            {" "}
            The most legendary memecoin in existence! <br></br> The dogs & frogs
            had their days, <br></br> now it's time for Peter to take reign.
          </p>

          <div className={styles.iconContainer}>
            <a
              href="https://t.me/petersonsol/3902"
              target="_blank"
              className={styles.button}
            >
              Launching 05 May 2024
            </a>
            <a
              href="https://t.me/peteronsols"
              target="_blank"
              className={styles.joinbutton}
            >
              Join Community
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={styles.peter}
        >
          <Image
            src="/assets/images/peterlogo.png"
            className={styles.peterlogo}
            width={450}
            height={450}
          ></Image>
        </div>
      </section>
      <div className={styles.textcopy}>
        <div ref={styledTextRef} className={styles.styledtext}>
          9ZuXMyk9TCN9jKWdKhZ1FiAr4jLboQ6wzF92MfiYvVz8
        </div>
        <button className={styles.copybutton} onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default Hero;
