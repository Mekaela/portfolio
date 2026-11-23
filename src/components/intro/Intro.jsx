import React from "react";
import styles from "./Intro.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";
import corkOverlay from "../../images/cork_overlay.png";

const Intro = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__copy}>
        <h1>Mekaela</h1>
        <p className={styles.hero__eyebrow}>
          <span /> {t("hero.role")}
        </p>
        <div className={styles.hero__description}>
          {t("hero.description")
            .split("\n\n")
            .map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
      </div>

      <figure className={styles.hero__art}>
        <img
          className={styles.hero__image}
          src={corkOverlay}
          alt={t("hero.imageCaption")}
        />
        <figcaption className={styles.hero__caption}>
          {t("hero.imageCaption")}
        </figcaption>
      </figure>
    </section>
  );
};

export default Intro;
