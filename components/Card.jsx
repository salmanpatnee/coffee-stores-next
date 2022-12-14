import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import styles from "../styles/card.module.css";

const Card = ({name, href, imageUrl}) => {
  return (
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imageUrl}
              width={260}
              height={160}
              alt={name}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
