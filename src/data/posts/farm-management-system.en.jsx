import React from "react";
import farmManagementImage from "../../images/antaia.png";

const post = {
  id: "farm-management-system",
  language: "en",
  title: "Farm management system",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        A full-stack data collection tool built with Django and PostgreSQL. I
        designed and built the database schema, backend logic, and front end to
        support on-farm data acquisition.
      </p>
      <figure>
        <img
          src={farmManagementImage}
          alt="Farm management system project"
        />
        <figcaption>
          Add details about the system and its users here.
        </figcaption>
      </figure>
      <p>
        This is a private product for Portuguese farmers. It follows the Caderno do Campo (Field Notebook) format, 
        which is a standardised way of recording farm management practices in Portugal. 
        The system allows farmers to record their management practices, including fertiliser and pesticide applications, crop rotations, and other relevant information. 
        This data can then be used to support decision-making and improve farm management practices. 
      </p>
    </>
  ),
};

export default post;
