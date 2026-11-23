import React from "react";
import styles from "./Intro.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

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

      {/* <div className={styles.hero__art} aria-label={t("hero.artLabel")}>
        <div className={styles.hero__art_heading}>
          <span>{t("hero.fieldNotes")}</span>
          <span>{t("hero.dataContext")}</span>
        </div>
        <svg
          className={styles.hero__landscape}
          viewBox="0 0 640 520"
          role="img"
          aria-label={t("hero.landscapeLabel")}
        >
          <path d="M-20 312C110 248 178 338 284 286s201-87 376-22v280H-20Z" />
          <path d="M-20 347c110-54 189 16 293-30s221-85 387-26" />
          <path d="M-20 374c111-49 195 20 300-22s222-78 380-20" />
          <path d="M-20 403c111-44 202 20 309-17s219-72 371-18" />
          <path d="M-20 435c119-38 207 18 319-12s218-64 361-12" />
          <path d="M-20 465c121-32 216 12 330-8s211-53 350-7" />
          <path d="M82 0c-5 84 26 128 9 197s-44 92-41 152" />
          <path d="M114 0c-7 83 21 129 7 193s-40 95-37 156" />
          <path d="M148 0c-7 81 20 126 7 188s-37 98-33 160" />
          <path d="M182 0c-7 77 19 124 7 183s-34 97-29 163" />
          <path d="M216 0c-6 75 17 119 7 178s-31 99-26 168" />
        </svg>
        <div className={styles.hero__data_card}>
          <span className={styles.hero__data_label}>{t("hero.clearerPicture")}</span>
          <div className={styles.hero__data_sources}>
            <span>{t("hero.field")}</span>
            <b aria-hidden="true">+</b>
            <span>{t("hero.climate")}</span>
            <b aria-hidden="true">+</b>
            <span>{t("hero.operations")}</span>
          </div>
          <div className={styles.hero__data_result}>
            <span className={styles.hero__data_dot} />
            {t("hero.insight")}
          </div>
        </div> */}
        {/* <span className={styles.hero__art_caption}>{t("hero.artCaption")}</span>
      </div> */}
    </section>
  );
};

export default Intro;
