import React from "react";
import styles from "./Faqs.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

const Faqs = () => {
  const { t } = useLanguage();
  const qAndAs = [1, 2, 3];

  return (
    <div className={styles.faqs}>
      <h1 className={styles.faqs__title}>{t("faq.title")}</h1>
      <p className={styles.faqs__intro}>{t("faq.intro")}</p>
      {qAndAs.map((id) => (
        <div key={id} className={styles.faqs__container}>
          <h4 className={styles.faqs__question}>{t(`faq.question${id}`)}</h4>
          <p className={styles.faqs__answer}>{t(`faq.answer${id}`)}</p>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
