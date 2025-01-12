"use client"

import React, { useEffect } from 'react';
import styles from '@/components/Sections/first.module.css';
import Image from "next/image"
import Wrapper from '../gadgets/Wrapper';
import TypedWrapper from '../gadgets/Typed';
import AOS from "aos"


const Hero: React.FC = () => {
useEffect(() => { 
  AOS.init({ }); 
}, []);


  return (
    <Wrapper>

    <section className={styles.hero} data-aos="zoom-in-up">
      <div className={styles.heroContent}>
        <h1>
          hi! I m <br /> Muhammad Azhar
          <div className={styles.typedWrapper}>

        <TypedWrapper strings={["Jam-Stack Developer", "MS Office Expert"]}  />
          </div>
        </h1>
        <p>Im devoted to making the outside additional open, rousing people to investigate the magnificence of nature and the energy of climbing. With ability and top notch gear, I engage globe-trotters, everything being equal, to set out on remarkable excursions.</p>
        <a href="/contact" className={styles.ctaButton}>Hire Me</a>
      </div>
      <div className={styles.heroImage}>
        <Image src="/hero.jpeg" alt="Your Face" width={400} height={400} />
      </div>
      
    </section>
    </Wrapper>
  
  );
};

export default Hero;
