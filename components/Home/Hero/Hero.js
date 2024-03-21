import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
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
            href="https://beta.pinksale.finance/solana/launchpad/61Fdd5gzrZYdoEXV8Fwpmk9bptAMqmYe6Rv5AUJ4EfAa"
            target="_blank"
            className={styles.button}
          >
            Buy On Pinksale
          </a>
          <a
            href="https://t.me/griffinonsolana"
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
          width={450}
          height={450}
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
