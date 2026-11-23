import React from "react";
import Faqs from "../../components/faqs/Faqs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.faqPage}>
      <Navbar />
      <main className={styles.faqPage__content}>
        <Faqs />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
