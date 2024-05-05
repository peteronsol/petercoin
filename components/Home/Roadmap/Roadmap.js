import styles from "./Roadmap.module.css";
import { useState } from "react";
import Image from "next/image";
const Roadmap = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const phases = [
    {
      title: "Phase 1",
      description:
        " Growing organically 1k members on Telegram, Instagram, Twitter",
      image: "/assets/images/phase1.png",
    },
    {
      title: "Phase 2",
      description: "Presale goal 400 SOLS - Raised 300 SOLS. ",
      image: "/assets/images/phase2.png",
    },
    {
      title: "Phase 3",
      description:
        "Launch - Hiring Kols, Influencers pushing towards $5m - $10m(Airdrop season)",
      image: "/assets/images/phase3.png",
    },
    {
      title: "Phase 4",
      description:
        "Launching NFT collection Getting in Real life PETER in. ROB franzese ",
      image: "/assets/images/phase4.png",
    },
    {
      title: "Phase 5",
      description: "Towards $100m+ goal 🚀🚀",
      image: "/assets/images/phase5.png",
    },
  ];

  const handlePhaseClick = (index) => {
    setSelectedPhase(index);
  };

  const handlePrevPhase = () => {
    setSelectedPhase((prevPhase) => Math.max(prevPhase - 1, 0));
  };

  const handleNextPhase = () => {
    setSelectedPhase((prevPhase) => Math.min(prevPhase + 1, phases.length - 1));
  };

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
          Roadmap
        </h1>
      </div>
      {/* <div className={styles.container}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.peterimg}
        >
          <Image
            className={styles.peterimgs}
            src="/assets/images/Peterchart.png"
            alt="peter coin"
            width={400}
            height={410}
          />
        </div>
        <div className={styles.content}>
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
              <div className="content">
                <p>
                  <strong>
                    Phase 1
                    <br />
                  </strong>{" "}
                  Growing organically 1k members on Telegram, Instagram, Twitter
                </p>
                <p>
                  <strong>
                    Phase 2
                    <br />
                  </strong>{" "}
                  Presale goal 400 SOLS - Raised 300 SOLS.
                </p>
                <p>
                  <strong>
                    Phase 3
                    <br />
                  </strong>{" "}
                  Launch : Hiring Kols, Influencers pushing towards $5m - $10m
                  (Airdrop season)
                </p>
                <p>
                  <strong>
                    Phase 4
                    <br />
                  </strong>{" "}
                  Launching NFT collection
                  <br />
                  Getting in Real life PETER in. ROB franzese
                </p>
                <p>
                  <strong>
                    Phase 5
                    <br />
                  </strong>{" "}
                  Towards $100m goal 🚀🚀
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.peterimg}
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <Image
            className={styles.peterimgs}
            src="/assets/images/Peter1.png"
            alt="peter coin"
            width={400}
            height={400}
          />
        </div>
      </div> */}
      <div className={styles.horizontalslidertimeline}>
        <div className={styles.timeline}>
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`${styles.phase} ${
                index === selectedPhase ? styles.active : ""
              }`}
              onClick={() => handlePhaseClick(index)}
            >
              <div className={styles.stepperItem}>
                <div
                  className={`${styles.bullet} ${
                    index === selectedPhase ? styles.activeBullet : ""
                  }`}
                ></div>
                {index < phases.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
              <span className={styles.phaseTitle}>{phase.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.phasecontainer}>
          <button className={styles.arrowBtn} onClick={handlePrevPhase}>
            ←
          </button>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <img src={phases[selectedPhase].image} alt="Phase Image" />
              </div>
              <div className={styles.cardText}>
                <h2 className={styles.cardtitle}>
                  {phases[selectedPhase].title}
                </h2>
                <p className={styles.carddescription}>
                  {phases[selectedPhase].description}
                  <br />
                  <span className={styles.completed}>Completed ✔️</span>
                </p>
              </div>
            </div>
          </div>
          <button className={styles.arrowBtn} onClick={handleNextPhase}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
