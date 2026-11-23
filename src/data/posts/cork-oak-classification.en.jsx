import React from "react";
import corkOakImage from "../../images/cork_oak_detection.png";

const post = {
  id: "cork-oak-classification",
  language: "en",
  title:
    "Tree detection to estimate tree heights and crown areas in Montado woodland",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        This study applies computer vision to detect cork oak crowns in
        Montado woodland. It combines UAV RGB imagery and digital terrain model
        data to estimate the height and crown area of individual trees. 
        Inputs are RGB and DSM UAV imaeges of 10cm pixel size.
        Outputs are tree crown polygons, tree heights, and tree crown areas for each detected tree, as well as total crown coverage.
      </p>
      <figure>
        <img
          src={corkOakImage}
          alt="Cork oak trees detected from above"
        />
        <figcaption>
          Small section of the woodland site before (left) and after (right) tree detection.
        </figcaption>
      </figure>
      <p>
        It compares machine learning
        detection models, Detectree2 and YOLOv8, to detect cork oak (Quercus suber L.) across a
        60 hectare woodland site in the Lezíria do Tejo sub-region of Portugal using UAV imagery.
        Tree crown detection is followed by height estimation to find the total height of each tree,
        and crown area is derived from the detected crown polygons. The goal of this study is to
        evaluate model performance in terms of (i) tree detection accuracy, (ii) height estimate
        correlation with fieldwork heights, and (iii) crown area estimate correlation with manually
        drawn crowns based on GPS points taken during fieldwork, to assess the potential for
        scalable tree mapping in agroforests. Results achieved an F1 of 0.775 at detecting tree
        crowns, 0.646 R² at estimating tree heights, and 0.887 R² at estimating tree crown areas
        with YOLOv8, and an F1 of 0.385 at classifying tree crowns, 0.535 R² at estimating tree
        heights, and 0.778 R² at estimating tree crown areas with Detectree2
      </p>
      <p>This study showed that there is a high potential for using UAV imagery with machine
        learning and geospatial processing techniques to replace field height and crown area data
        collection in woodland areas. It also shows some promise of assisting with other data
        collection such as diameter at breast height,
        though this requires further study and modelling. The greatest benefit of this approach is that
        every tree at a site can have its height and crown area calculated, rather than needing to
        extrapolate landscape values from sampled plot values. Such modelling has the potential to
        reduce fieldwork required to collect data for applications such as biomass estimation.  
      </p>
    </>
  ),
};

export default post;
