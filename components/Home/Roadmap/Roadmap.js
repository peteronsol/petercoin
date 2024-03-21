import styles from "./Roadmap.module.css";
import Image from 'next/image';
const Roadmap = () => {

  
    const LineStyle = {
        width: '100%',
        height: '10px',
        backgroundColor: '#ffffff', 
        borderRadius: '50%',
        margin: '10px 0',
        position: 'relative',
      };

  return (
    <section id="Roadmap" className={styles.main}>
      <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet"></link>
        <div style={LineStyle} > </div>
      <div className={styles.headingHolder}>
        
        <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className={styles.heading}>
          Roadmap
        </h1>

      </div>
      <div className={styles.container}>
      <div data-aos="fade-right" data-aos-duration="1000" className={styles.peterimg}>
        <Image className={styles.peterimgs} src="/assets/images/Peterchart.png" alt="peter coin" width={400} height={410} />
      </div>
      <div className={styles.content}>
        <div data-aos="fade-down" data-aos-duration="1000" className={styles.card}>
          <div data-aos="zoom-out-up" data-aos-duration="1000" data-aos-easing="linear" className={styles.cardContent}>
          • Phase 1: Announcement & Launch <br></br>
          • Phase 2: Vibe and HODL<br></br>
          • Phase 3: $Peter Coin Takeover
          <br></br>  <br></br> No bullshit, it’s that simple.  </div>
        </div>
        
      </div>
      <div className={styles.peterimg} data-aos="fade-down-left" data-aos-duration="1000">
        <Image className={styles.peterimgs} src="/assets/images/Peter1.png" alt="peter coin" width={400} height={400} />
      </div>
    </div>
    </section>
  );
};

export default Roadmap;
