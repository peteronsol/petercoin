import React from 'react';
import Head from "next/head";
import {
  Hero,
  About,
  Story,
  Roadmap,
  Buy,
  Footer,
} from "../components/Home";
import { Navbar } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
      <title>Peter</title>
        <meta name="description" content="The most legendary memecoin in existence! The dogs & frogs had their days, now it's time for Peter to take reign.
        
" />
<meta property="og:title" content="Peter Coin" />
        <meta property="og:description" content="The most legendary memecoin in existence! The dogs & frogs had their days, now it's time for Peter to take reign." />
        <meta property="og:image" content="" />

  

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Hero />
        <About />
        <Story />
        <Roadmap />
        <Buy />
        <Footer />
      </main>
    </>
  );
};

export default Home;
