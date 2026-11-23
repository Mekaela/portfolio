import React from "react";
import styles from "./Projects.module.scss";
import { useLanguage } from "../../i18n/LanguageContext";
import { Link } from "react-router-dom";
import corkOakDetection from "../../images/cork_oak_detection.png";
import soc from "../../images/soc.png";
import antaia from "../../images/antaia.png";

const projects = [
  {
    number: "github.com/Mekaela/cork-oak-classification",
    category: "projects.category1",
    title: "projects.title1",
    description: "projects.description1",
    image: corkOakDetection,
    postId: "cork-oak-classification",
  },
  {
    number: "github.com/Mekaela/isa_soc_predictor",
    category: "projects.category2",
    title: "projects.title2",
    description: "projects.description2",
    image: soc,
    postId: "soil-carbon-prediction",
  },
  {
    number: "private github",
    category: "projects.category3",
    title: "projects.title3",
    description: "projects.description3",
    image: antaia,
    postId: "farm-management-system",
  },
];

const ProjectVisual = ({ image }) => (
  <div className={styles.projects__visual}>
    <img className={styles.projects__image} src={image} alt="" />
  </div>
);

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.projects} id="work">
      <div className={styles.projects__heading}>
        <div>
          <p className={styles.projects__eyebrow}>{t("projects.eyebrow")}</p>
          <h2>{t("projects.title")}</h2>
        </div>
      </div>
      <div className={styles.projects__grid}>
        {projects.map((project) => (
          <Link
            className={styles.projects__link}
            to={`/blog/${project.postId}`}
            key={project.number}
          >
            <article className={styles.projects__card}>
              <ProjectVisual image={project.image} />
              <div className={styles.projects__meta}>
                <span> {project.number}</span>
                <span>{t(project.category)}</span>
              </div>
              <h3>{t(project.title)}</h3>
              <p>{t(project.description)}</p>
            </article>
          </Link>
        ))}
      </div>
      <p className={styles.projects__experience}>{t("projects.experience")}</p>
    </section>
  );
};

export default Projects;
