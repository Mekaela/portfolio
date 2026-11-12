import React from "react";
import styles from "./Footer.module.scss";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/mekaela-stevenson/"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          className={styles.footer__icon}
          icon={faLinkedinIn}
          size="2x"
        />
      </a>
      <a href="https://github.com/Mekaela" aria-label="GitHub">
        <FontAwesomeIcon
          className={styles.footer__icon}
          icon={faGithub}
          size="2x"
        />
      </a>
      <p className={styles.footer__copyright}>
        &#169; {currentYear} Mekaela Stevenson
        {language === "pt" ? " · Todos os direitos reservados" : " · All rights reserved"}
      </p>
    </div>
  );
};

export default Footer;
