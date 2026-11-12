import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={styles.nav}>
      <Link className={styles.nav__brand} to="/" aria-label="Mekaela Stevenson home">
        <span className={styles.nav__mark} aria-hidden="true">
          m
        </span>
        <span>
          <strong>Mekaela Stevenson</strong>
          <small>{t("nav.tagline")}</small>
        </span>
      </Link>
      <nav className={styles.nav__links} aria-label={t("nav.navigation")}>
        <Link to="/">{t("nav.portfolio")}</Link>
        <Link to="/blog">{t("nav.blog")}</Link>
        <Link to="/faq">{t("nav.faq")}</Link>
      </nav>
      <div className={styles.nav__language} role="group" aria-label={t("nav.languageLabel")}>
        <button
          type="button"
          className={language === "en" ? styles.nav__language_active : ""}
          aria-pressed={language === "en"}
          aria-label={t("nav.english")}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <button
          type="button"
          className={language === "pt" ? styles.nav__language_active : ""}
          aria-pressed={language === "pt"}
          aria-label={t("nav.portuguese")}
          onClick={() => setLanguage("pt")}
        >
          PT
        </button>
      </div>
    </header>
  );
};

export default Navbar;
