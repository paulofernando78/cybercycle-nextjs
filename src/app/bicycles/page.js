// Component
import React from "react";
import Image from "next/image";

// Images
import { velocityV3, vortexV9, quantumX1 } from "@img/";

// Styles
import styles from "./styles.module.css";

export default function Bicycles() {
  return (
    <div className="bicycle-page">
      <h1>Our bicycles</h1>
      <h2>Explore our models</h2>
      <div className={styles["bicycle-container"]}>
        <div className={styles["bicycle-card"]}>
          <Image
            src={velocityV3}
            alt="Velocity Z2"
            layout="intrinsic"
          />
          <p>Velocity Z2</p>
          <p>The Velocity Z3 is a high-speed machine built for racing and extreme performance. With an aerodynamic frame, ultra-light materials, and cutting-edge battery technology, this bike delivers lightning-fast acceleration and top speeds, perfect for those who crave adrenaline on every ride.</p>
        </div>
        <div className={styles["bicycle-card"]}>
          <Image
            src={vortexV9}
            alt="Vortex V9"
            layout="intrinsic"
          />
          <p>Vortex V9</p>
          <p>The Vortex V9 is designed for effortless urban commuting with a focus on comfort and pleasure. Its smooth ride, ergonomic design, and intelligent assistance features make it the perfect choice for relaxed city journeys. With a long-lasting battery this bike ensures every ride feels enjoyable.</p>
        </div>
        <div className={styles["bicycle-card"]}>
          <Image
            src={quantumX1}
            alt="Quantum X1"
            layout="intrinsic"
          />
          <p>Quantum X1</p>
          <p>The Quantum X1 blends high-speed performance with urban comfort.
          Featuring a sleek frame and advanced battery system for swift acceleration and long-range rides, it offers intelligent assistance and plush suspension, ensuring every journey is exhilarating and enjoyable.</p>
        </div>
      </div>
    </div>
  );
}
