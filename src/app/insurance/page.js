// Components
import { Card } from "@/components/Card";

// CSS
import styles from "./insurance.module.css";

export default function Insurance() {
  return (
    <div className="line-break">
      <h1>Choose a plan</h1>
      <div className={styles["insurance__container"]}>
        <Card
          label="Silver"
          price="$50/MON"
          descriptions={[
            "24/7 Technical support",
            "Statewide coverage",
          ]}
          width="270px"
          silver={true}
        />
        <Card
          label="Gold"
          price="$150/MON"
          descriptions={[
            "24/7 Technical support",
            "Statewide coverage",
            "Discount at partner companies",
            "Access to Cyber Wheel Club",
          ]}
          width="270px"
          gold={true}
        />
      </div>
    </div>
  );
}
