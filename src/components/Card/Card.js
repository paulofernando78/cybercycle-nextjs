// CSS
import styles from "./Card.module.css";

export const Card = ({ width, label, price, descriptions, silver, gold }) => {
  return (
    <div
      className={`line-break ${styles["card__container"]}`}
      style={{ width: width }}
    >
      <div
        className={`${styles["card__header"]}
        ${silver ? styles["card__header--silver"] : ""}
        ${gold ? styles["card__header--gold"] : ""}`}
      >
        <span>{label}</span>
        <span className={styles["card__price"]}>{price}</span>
      </div>
      <div>
        {descriptions.map((description, index) => (
          <p key={index} className={styles["card__description"]}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};
