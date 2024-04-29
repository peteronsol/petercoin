import styles from "./Phases.module.css";
import Image from "next/image";
const Phases = () => {
  const LineStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    margin: "10px 0",
    position: "relative",
  };

  return (
    <section id="Roadmap" className={styles.main}>
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
          Phases
        </h1>
      </div>
      <ul className={styles.timeline}>
        {/* Item 1 */}
        <li>
          <div className={styles.directionr}>
            <div className={styles.flagwrapper}>
              <span className={styles.hexa}></span>
              <span className={styles.flag}>Lorem ipsum.</span>
              <span className={styles.timewrapper}>
                <span className={styles.time}>Feb 2015</span>
              </span>
            </div>
            <div className={styles.desc}>
              Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate
              exercitation deserunt proident.
            </div>
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className={styles.directionl}>
            <div className={styles.flagwrapper}>
              <span className={styles.hexa}></span>
              <span className={styles.flag}>Lorem ipsum Anim.</span>
              <span className={styles.timewrapper}>
                <span className={styles.time}>Dec 2014</span>
              </span>
            </div>
            <div className={styles.desc}>
              Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor
              dolore aliquip enim cupidatat laborum dolore.
            </div>
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className={styles.directionr}>
            <div className={styles.flagwrapper}>
              <span className={styles.hexa}></span>
              <span className={styles.flag}>Lorem Occaecat.</span>
              <span className={styles.timewrapper}>
                <span className={styles.time}>July 2014</span>
              </span>
            </div>
            <div className={styles.desc}>
              Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident
              fugiat pariatur cillum cupidatat reprehenderit sit id dolor
              consectetur ut.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Phases;
