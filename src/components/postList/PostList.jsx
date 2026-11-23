import React from "react";
import styles from "./PostList.module.scss";
import { getPosts } from "../../data/Data";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const PostList = () => {
  const { language } = useLanguage();
  const posts = getPosts();

  return (
    <div className={styles.post__container}>
      {posts.map((post) => {
        const translation = post.translations[language] || post.translations.en;

        return (
          <div key={post.id} className={styles.post}>
            <Link to={`/blog/${post.id}`} className={styles.post__link}>
              <p className={styles.post__date}>
                {new Date(translation.date).toLocaleDateString(
                  language === "pt" ? "pt-PT" : "en-GB"
                )}
              </p>
              <h3 className={styles.post__title}>{translation.title}</h3>
              <p className={styles.post__byline}>{translation.byline}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
