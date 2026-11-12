import React from "react";
import styles from "./PostList.module.scss";
import { useEffect, useState } from "react";
import { getPosts } from "../../data/Data";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const PostList = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchBlogs = async () => {
    setLoading(true);

    const res = await getPosts();

    setPosts([...res]);
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className={styles.post__container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link to={`/blog/${post.id}`} className={styles.post__link}>
              <p className={styles.post__date}>
                {post.dateAdded
                  .toDate()
                  .toLocaleDateString(language === "pt" ? "pt-PT" : "en-GB")}{" "}
              </p>
              <h3 className={styles.post__title}>
                {language === "pt" ? post.titlePt || post.title : post.title}
              </h3>
              <p className={styles.post__byline}>
                {language === "pt" ? post.bylinePt || post.byline : post.byline}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
