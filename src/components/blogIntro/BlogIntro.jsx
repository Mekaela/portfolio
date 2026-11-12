import React from "react";
import styles from "./BlogIntro.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

const BlogIntro = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.blog}>
      <h1 className={styles.blog__title}>{t("blog.title")}</h1>
      <h5 className={styles.blog__subtitle}>{t("blog.author")}</h5>
      <p className={styles.blog__intro}>{t("blog.description")}</p>
    </div>
  );
};

export default BlogIntro;
