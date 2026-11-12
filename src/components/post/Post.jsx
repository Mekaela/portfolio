import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, getImage } from "../../data/Data";
import styles from "./Post.module.scss";
import dompurify from "dompurify";
import { useLanguage } from "../../i18n/LanguageContext";

const Post = () => {
  const [blog, setBlog] = useState([]);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { language, t } = useLanguage();
  const sanitizer = dompurify.sanitize;

  const fetchBlog = async () => {
    setLoading(true);
    const res = await getPost(id);
    setBlog(res || {});
    setLoading(false);
  };
  const fetchImageUrl = async () => {
    const res = await getImage("DS_design.jpg");
    setImage(res);
  };
  const title = language === "pt" ? blog.titlePt || blog.title : blog.title;
  const author = language === "pt" ? blog.authorPt || blog.author : blog.author;
  const body = language === "pt" ? blog.bodyPt || blog.body : blog.body;

  useEffect(() => {
    fetchBlog();
    fetchImageUrl();
  }, []);

  return (
    <div className={styles.post}>
      <img
        className={styles.post__coverImg}
        src={image}
        alt={blog.coverImgUrl}
      />
      <h2 className={styles.post__title}>{title}</h2>
      <p className={styles.post__author}>
        {t("post.by")} {author}
      </p>
      {/* <p className={styles.post__date}>{blog.dateAdded.toDate().toLocaleDateString("en-UK")}</p> */}
      <div
        className={styles.post__body}
        dangerouslySetInnerHTML={{ __html: sanitizer(body || "") }}
      ></div>
    </div>
  );
};

export default Post;
