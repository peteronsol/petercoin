import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  const LineStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    margin: "10px 0",
    position: "relative",
  };

  return (
    <section id="about" className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css2?family=Patua+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>{" "}
      <div style={LineStyle}></div>
      <h1
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className={styles.title}
      >
        About
      </h1>
      <div className={styles.container}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.imgContainer}
        >
          <Image
            className={styles.img}
            src="/assets/images/peter-bull.png"
            alt="Discord"
            width={450}
            height={450}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-center-class"
        >
          <h2 className={styles.heading}>
            INTRODUCING $PETER COIN <br></br>THE KING OF CRYPTO MEMECOINS!
          </h2>
          <p className={styles.paragraph}>
            Brace yourself for a wild ride of laughter as $PETER Coin storms the
            crypto meme space.
            <br></br>
            <br></br>
            Inspired by the legendary Peter Character, This Coin is not just a
            Currency; it's a cultural phenomenon.<br></br>
            <br></br>
            Join the revolution, Ride the waves, And let memes fuel your crypto
            journey !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
