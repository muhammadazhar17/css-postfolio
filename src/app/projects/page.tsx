import Link from "next/link";
import TypedWrapper from "@/components/gadgets/Typed";
import Wrapper from "@/components/gadgets/Wrapper";
import Styles from "./page.module.css";
import Image from "next/image";

// Define the interface for each box's content
interface BoxContent {
  title: string;
  description: string;
  checkitOut: string;
  imagePath: string;
  altText: string;
  link: string;
}

// Sample data for each box
const boxes: BoxContent[] = [
  {
    title: "Food Tuck",
    description: "Make some work winning proficient resume effectively with Foodtuck",
    imagePath: "/1.png",
    checkitOut: "Check Out",
    altText: "Adventure Awaits",
    link: "https://foodtuck-sigma.vercel.app/"
  },
  {
    title: "Mania Pizzato",
    description: "Find the perfect Pizza to elevate your outdoor experience to new taste.",
    imagePath: "/2.png",
    checkitOut: "Check Out",
    altText: "furniture",
    link: "https://mania-pizza-family.vercel.app/"
  },
  {
    title: "Tailwind css Portfolio",
    description: "Connect with like-minded adventurers and share your journey.",
    imagePath: "/3.png",
    checkitOut: "Check Out",
    altText: "Join the Community",
    link: "https://tailwindcss-portfolio-eight.vercel.app/"
  },
];

const Projectsection: React.FC = () => {
  return (
    <Wrapper>
      <section>
        <h1 className={Styles.h1}>
          <TypedWrapper strings={["My Projects", "About My Previous Work"]} />
        </h1>

        <div className={Styles.mainbox}>
          {boxes.map((box, index) => (
            <div key={index} className={Styles.box}>
              <Image
                src={box.imagePath}
                alt={box.altText}
                width={400}
                height={400}
              />
              <h3>{box.title}</h3>
              <p>{box.description}</p>
              
              {/* Link wrapping the button to make it a clickable link */}
              <Link href={box.link} passHref target="blank">
                <button className={Styles.blurrybutton}>
                  {box.checkitOut}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projectsection;
