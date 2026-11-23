import React from "react";
import soilCarbonImage from "../../images/soc.png";

const post = {
  id: "soil-carbon-prediction",
  language: "pt",
  title: "Ferramenta de previsão e gestão do carbono no solo para agricultores",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        Este projeto utiliza um modelo de regressão Random Forest para prever o
        teor de carbono orgânico do solo em explorações agrícolas, apoiando o
        planeamento e a tomada de decisões agrícolas. Permite aos proprietários
        rurais e decisores políticos estimar os níveis de carbono dos terrenos
        que gerem, introduzindo as práticas de gestão e as características do
        local. Os utilizadores podem então alterar as opções de gestão para
        encontrar as mais adequadas ao local e decidir como gerir os seus
        terrenos.
      </p>
      <figure>
        <img
          src={soilCarbonImage}
          alt="Projeto de previsão do carbono orgânico do solo"
        />
        <figcaption>
          Capturas de ecrã da ferramenta.
        </figcaption>
      </figure>
      <p>
        Este projeto exigiu a limpeza de um conjunto de dados de grandes
        dimensões. Pode ser considerado uma prova de conceito, tendo em conta
        a ausência da variável relativa aos fertilizantes e os problemas nos
        dados, que obrigaram à remoção de muitos registos antes da modelação.
        Os resultados foram promissores na previsão do carbono orgânico do solo
        (SOC) abaixo de 3. Havia, contudo, poucos dados para valores superiores,
        pelo que as previsões desses valores foram bastante menos precisas. O
        modelo obteve R² de 0,784 e RMSE de 0,486. O modelo poderia ser
        melhorado acrescentando dados climáticos aos registos em falta e
        incluindo nos resultados recomendações de práticas de gestão que
        aumentem o SOC.
      </p>
    </>
  ),
};

export default post;
