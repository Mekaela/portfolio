import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../data/Data";
import styles from "./Post.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";

const Post = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const blog = getPost(id);

  if (!blog) {
    return (
      <main className={styles.post}>
        <h2 className={styles.post__title}>Post not found</h2>
      </main>
    );
  }

  const translation = blog.translations[language] || blog.translations.en;

  return (
    <main className={styles.post}>
      <h1 className={styles.post__title}>{translation.title}</h1>
      <p className={styles.post__author}>
        {t("post.by")} {translation.byline}
      </p>
      <div className={styles.post__body}>{translation.content}</div>
    </main>
  );
};

export default Post;
