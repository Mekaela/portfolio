import React from "react";
import styles from "./Contact.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.contact} id="contact">
      <p className={styles.contact__eyebrow}>{t("contact.eyebrow")}</p>
      <div className={styles.contact__content}>
        <h2>
          {t("contact.titleLine1")}
          <br />
          {t("contact.titleLine2")} <em>{t("contact.titleEmphasis")}</em>
        </h2>
        <div className={styles.contact__aside}>
          <p>{t("contact.description")}</p>
          <a
            className={styles.contact__link}
            href="https://www.linkedin.com/in/mekaela-stevenson-b215b954/"
            target="_blank"
            rel="noreferrer"
          >
            {t("contact.link")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
