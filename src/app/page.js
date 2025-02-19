// Components
import Image from "next/image";

// Styles

// Images
import { introduction } from "@img/index";

export default function Home() {
  return (
    <div className="line-break">
      <h1 className="uppercase shadow-effect">The future of bicycling starts here</h1>
      <p>
        Experience cutting-edge, battery-powered bicycles designed for the
        ultimate ride. Our sleek models redefine mobility, combining effortless
        speed with futuristic design. Embrace the next generation of
        biking—where innovation meets elegance, and every destination feels
        within reach.
      </p>
      <Image
        src={introduction}
        alt="Cybercycle"
        className="img-customazation"
      />
      <h1 className="uppercase">Customize yours now</h1>
      <div>
        <h2>Advance technology</h2>
        <h3>Our bicycles are equipped with the latest in battery technology, providing more range, faster charging, and intelligent power management to optimize every ride. Welcome to the future of transportation.</h3>
        <h2>Durability</h2>
        <h3>Our bicycles are built to last, with high-quality materials and precision engineering. Every model is designed to withstand the elements, ensuring a smooth ride for years to come.</h3>
        <h2>Tracking</h2>
        <h3>We know how precious your Bikcraft is, so we have added trackers and anti-theft systems to ensure your peace of mind.</h3>
      </div>
      <h1>Our partners</h1>
    </div>
  );
}
