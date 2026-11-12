import React from "react";
import styles from "./Languages.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

const capabilities = [
  {
    number: "01",
    title: "capabilities.title1",
    description: "capabilities.description1",
  },
  {
    number: "02",
    title: "capabilities.title2",
    description: "capabilities.description2",
  },
  {
    number: "03",
    title: "capabilities.title3",
    description: "capabilities.description3",
  },
];

const Languages = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.capabilities} id="approach">
      <div className={styles.capabilities__intro}>
        <p className={styles.capabilities__eyebrow}>{t("capabilities.eyebrow")}</p>
        <h2>{t("capabilities.title")}</h2>
        <p className={styles.capabilities__summary}>{t("capabilities.summary")}</p>
      </div>
      <div className={styles.capabilities__list}>
        {capabilities.map((capability) => (
          <article className={styles.capabilities__item} key={capability.number}>
            <span className={styles.capabilities__number}>{capability.number}</span>
            <div>
              <h3>{t(capability.title)}</h3>
              <p>{t(capability.description)}</p>
            </div>
            <span className={styles.capabilities__arrow} aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Languages;
