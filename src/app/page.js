// Components
import Image from "next/image";

// Styles
import styles from "./page.module.css";

// Images
import { introduction, cyclist } from "@img/index";

const logos = [
  {
    src: "/assets/img/partners/caravan.svg",
    alt: "Caravan Logo",
  },
  {
    src: "/assets/img/partners/dogs.svg",
    alt: "Dogs Logo",
  },
  {
    src: "/assets/img/partners/flexblog.svg",
    alt: "Flexblog Logo",
  },
  {
    src: "/assets/img/partners/handel.svg",
    alt: "HandelLogo",
  },
  {
    src: "/assets/img/partners/lescone.svg",
    alt: "LesconeLogo",
  },
  {
    src: "/assets/img/partners/ranek.svg",
    alt: "Ranek Logo",
  },
  {
    src: "/assets/img/partners/surfbot.svg",
    alt: "Surfbot Logo",
  },
  {
    src: "/assets/img/partners/wildbeast.svg",
    alt: "WildbeatLogo",
  },
];

export default function Home() {
  return (
    <div className="line-break">
      {/* Introduction */}
      <section arial-label="Introduction">
        <h1>The future of bicycling starts here</h1>
        <div className={styles["introduction__container"]}>
          <p>
            Experience cutting-edge, battery-powered bicycles designed for the
            ultimate ride. Our sleek models redefine mobility, combining
            effortless speed with futuristic design. Embrace the next generation
            of biking—where innovation meets elegance, and every destination
            feels within reach.
          </p>
          <Image
            src={introduction}
            alt="Cybercycle"
            className={`img-customazation ${styles["image"]}`}
          />
        </div>
      </section>
      {/* Customzation */}
      <section arial-label="Customization">
        <h1>Customize yours now</h1>
        <div className={styles["information__container"]}>
          <div className="line-break">
            <h2>Advance technology</h2>
            <p>
              Our bicycles are equipped with the latest in battery technology,
              providing more range, faster charging, and intelligent power
              management to optimize every ride. Welcome to the future of
              transportation.
            </p>
          </div>
          <div className="line-break">
            <h2>Durability</h2>
            <p>
              Our bicycles are built to last, with high-quality materials and
              precision engineering. Every model is designed to withstand the
              elements, ensuring a smooth ride for years to come.
            </p>
            <h2>Tracking</h2>
            <p>
              We know how precious your CyberWheel is, so we have added trackers
              and anti-theft systems to ensure your peace of mind.
            </p>
          </div>
        </div>
      </section>
      {/* Partners */}
      <section
        className={`line-break ${styles["partners__container"]}`}
        arial-label="Partners"
      >
        <h1>Our partners</h1>
        <div
          className={styles["slider"]}
          style={{
            "--width": "100px",
            "--height": "36px",
            "--quantity": 8,
          }}
        >
          <ul className={styles["brands"]}>
            {logos.map((logo, logoIndex) => (
              <li
                key={logoIndex}
                className={styles["logos"]}
                style={{ "--position": logoIndex + 1 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={80}
                  style={{ height: "auto" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Tetimonials */}
      <section arial-label="Testimonials">
        <div className={styles["testimonials__container"]}>
          <Image src={cyclist} alt="Cybercycle" className="img-customazation" />
          <blockquote className={styles["testimonials__text"]}>
            <p>
              I never thought I would enjoy biking as much as I do now. The
              CyberWheel is a game-changer. Its fast, reliable, and so much fun
              to ride.
            </p>
            <span>Ana Smith</span>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
