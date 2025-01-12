// pages/about.tsx
import Image from "next/image"
import styles from './About.module.css';
import TypedWrapper from "@/components/gadgets/Typed";
import Wrapper from "@/components/gadgets/Wrapper";

const About = () => {
  return (
    <Wrapper>

      <div>
        <div
          className="my-16 border-t border-gray-700  py-0">
        </div>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            <div>
            <TypedWrapper strings={["About Me", "Who I Am"]} />
            </div>
          </h1>
          <div className={styles.box}>
            <div className={styles.text}>

            <p className={styles.p}>
              Im an enthusiastic supporter for making the outside more open to everybody. My central goal is to move others to encounter the magnificence of nature and the adventure of climbing. Whether you re an accomplished climber or simply beginning, I m here to give the direction, stuff, and ability you want to set out on your next experience.
              </p>
              <p className={styles.p}>

                I strive to design and offer products that elevate every outdoor experience, ensuring you re ready for whatever challenges nature throws your way.
              </p>
              <p className={styles.p}>

              Go along with me in stretching the boundaries of investigation, embracing the difficulties of the wild, and building an energetic local area that has similar energy for climbing and outside exercises. Together, we can arrive at new levels.
              </p>

            </div>
            <Image
              src="/hero.jpeg"
              alt="About Image"
              width={400}
              height={400}
              className={styles.image} />
          </div>
        </div>
      </div>
      <div
        className="my-16 border-t border-gray-700  py-0">
      </div>
    </Wrapper>
  );
};

export default About;
