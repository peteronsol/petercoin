import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Buy.module.css";

const AnimatedText = ({ text }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.textReveal} ${isInView ? styles.animate : ""}`}
    >
      {text &&
        text.split("<br>").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
    </div>
  );
};

const Buy = () => {
  const LineStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    margin: "10px 0",
    position: "relative",
  };

  return (
    <section id="Buy" className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap"
        rel="stylesheet"
      ></link>
      <div style={LineStyle}> </div>
      <div className={styles.headingHolder}>
        <h1
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className={styles.heading}
        >
          How to buy (after launch)
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div>
                <Image
                  className={styles.buyimages}
                  src="/assets/images/wallet2.png"
                  width={100}
                  height={100}
                  alt="buy peter"
                ></Image>
              </div>
              <div>
                <h3
                  data-aos="fade-in"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                >
                  Create a Wallet
                </h3>
                <p>
                  For desktop users, download the Phantom Wallet extension or a
                  wallet of your choice. <br />
                  For mobile users, download the Phantom wallet or a wallet of
                  your choice from the App Store or Google Play Store for free.
                  <br />
                  After that, create your wallet address.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div>
                <Image
                  className={styles.buyimages}
                  src="/assets/images/solcart1.png"
                  width={100}
                  height={100}
                  alt="buy peter"
                ></Image>
              </div>
              <div>
                <h3 data-aos="fade-in" data-aos-duration="700">
                  Get Some SOL
                </h3>
                <p className={styles.gapdown}>
                  Make sure to have SOL in your wallet to swap to $PETER.
                </p>
                <p>
                  You can buy directly on Phantom Wallet, transfer from another
                  wallet, or buy on another exchange and send it to your wallet.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div></div>
              <div>
                <Image
                  className={styles.buyimages}
                  src="/assets/images/dex2.png"
                  width={100}
                  height={100}
                  alt="buy peter"
                ></Image>
              </div>
              <div>
                <h3 data-aos="fade-in" data-aos-duration="700">
                  Go to Decentralized Exchange ( DEX ){" "}
                </h3>
                <p>
                  Go to your favorite decentralized exchange (DEX) in your web
                  browser or within your Wallet app's browser
                </p>
                <p>
                  Connect your wallet, paste the $PETER token address into the
                  swap section.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div>
                <Image
                  className={styles.buyimages}
                  src="/assets/images/swap2.png"
                  width={100}
                  height={100}
                  alt="buy peter"
                ></Image>
              </div>
              <div>
                <h3 data-aos="fade-in" data-aos-duration="700">
                  Swap SOL for $PETER{" "}
                </h3>

                <p className={styles.gapdown}>
                  You can select to swap $PETER with $SOL or any other coin.
                  After selecting the two swap coins, confirm and enjoy the
                  ride.
                </p>
                <p>We don't have any tax fees or any hidden fees.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
