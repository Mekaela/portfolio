import React from "react";
import soilCarbonImage from "../../images/soc.png";

const post = {
  id: "soil-carbon-prediction",
  language: "en",
  title: "Carbon soil prediction and management tool for farmers",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        This project uses a Random Forest regression model to predict soil
        organic carbon content on farms, supporting agricultural planning and
        decision-making. It allows landowners and policymakers to estimate the 
        carbon levels of the land they manage by inputting the
        management techniques and site details. Users can then change the management
        choices to find the best choices for their site, which helps them to choose how to
        manage their land.
      </p>
      <figure>
        <img
          src={soilCarbonImage}
          alt="Soil organic carbon prediction project"
        />
        <figcaption>
          Screenshots of the tool.
        </figcaption>
      </figure>
      <p>
        This project required cleaning of a large dataset. It can be considered a proof of concept, 
        considering the missing fertiliser variable, and the data issues present which required many records
        to be removed before modelling. Results were quite promising for Soil Organic Carbon (SOC) prediction below 3, 
        however data was limited above this and so predictions for higher values were much less accurate. 
        The R² for the model was 0.784, and the RMSE was 0.486. 
        Improvements could be made by adding climate records to the records missing them, and by 
        providing the management techniques to improve the SOC in the output. 
      </p>
    </>
  ),
};

export default post;
