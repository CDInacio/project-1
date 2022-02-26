import Link from "next/link";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer__top"]}>
        <div className={classes["footer__fb"]}>
          <Link href="https://www.facebook.com/search/top?q=quitandas%20da%20ana%20mares" passHref>
            <FaFacebookF size={25} />
          </Link>
        </div>
        <div className={classes["footer__insta"]}>
          <Link href="https://www.instagram.com/quitandasanamares/" passHref>
            <FaInstagram size={25} />
          </Link>
        </div>
        <div className={classes["footer__whats"]}>
          <Link href="#" passHref>
            <BsWhatsapp size={22} />
          </Link>
        </div>
        <div id="contact" className={classes["footer__contact"]}>
          contato: nomedoemail@algumacoisa.com
        </div>
      </div>
      <div className={classes["footer__bottom"]}>
        design por{" "}
        <Link href="https://www.instagram.com/claudiovdsi/">
          Cláudio Vitor Dantas
        </Link>{" "}
        - claudiovitordantas1996@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
