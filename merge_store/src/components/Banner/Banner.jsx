import bannerImg from "../../images/banner.png";
import styles from "../../styles/Home.module.css";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        New sole
        <span>Discount</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <p className={styles.discount}>
        save to <span>55%</span>
      </p>
    </div>
  </section>
);

export default Banner;
