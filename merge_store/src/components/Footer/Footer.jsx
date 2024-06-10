import { Link } from "react-router-dom";
import LOGO from "../../images/logo.svg";
import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/route";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.Home}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a href="#" rel="noreferrer" target="_blank">
          Tigibom-bom
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" rel="noreferrer" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
