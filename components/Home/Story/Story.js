import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Story.module.css";
import { motion } from "framer-motion";

const Story = () => {
  const LineStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    margin: "10px 0",
    position: "relative",
  };

  const AnimatedNumber = ({ number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = number;
      const duration = 5000; // Increase duration for slower animation
      const step = Math.ceil((end - start) / (duration / 10)); // Calculate increment step

      const timer = setInterval(() => {
        const nextCount = Math.min(count + step, end);
        setCount(nextCount);

        if (nextCount === end) {
          clearInterval(timer);
        }
      }, 10); // Interval time

      return () => clearInterval(timer);
    }, [count, number]);

    return <p className={styles.textBox}>{count.toLocaleString()}</p>;
  };

  return (
    <section id="story" className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap"
        rel="stylesheet"
      ></link>

      <div style={LineStyle}> </div>
      <h1
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className={styles.heading}
      >
        Tokenomics{" "}
      </h1>

      <div className={styles.container}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.peterimg}
        >
          <Image
            className={styles.peterimgs}
            src="/assets/images/Peter2.png"
            alt="Make Peter Great Again"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.content}>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={styles.titleBox}
          >
            <p>Total Supply</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={styles.textBox}
          >
            {/* <p>1,000,000,000</p> */}
            <AnimatedNumber number={1000000000} />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className={styles.card}
          >
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className={styles.cardContent}
            >
              Say NO to taxes, YES to Locked LP tokens forever (+100 Years) &
              Contract ownership is renounced for a truly decentralized
              experience, <br></br> GOODBYE to centralized control!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
