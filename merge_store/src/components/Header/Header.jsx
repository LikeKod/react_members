import { Link } from "react-router-dom";
import AVATAR from "../../images/avatar.jpg";
import LOGO from "../../images/logo.svg";
import styles from "../../styles/Header.module.css";
import { ROUTES } from "../../utils/route";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.Home}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Got shopping!"
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          <div className={styles.box}></div>
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.Home} className={styles.favorites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLICK_URL}/spite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
