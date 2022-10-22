import styles from "../styles/banner.module.css";
const Banner = ({ onClick, buttonText }) => {
  return (
    <div className="banner">
      <h1 className={styles.banner_title}>
        <span className={styles.banner_title1}>Coffee</span>
        <span className={styles.banner_title2}>Stores</span>
      </h1>
      <p className={styles.banner_subTitle}>Discover local coffee stores</p>
      <div className={styles.banner_buttonWrapper}>
        <button className={styles.banner_button}onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Banner;
