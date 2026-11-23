import React from "react";
import corkOakImage from "../../images/cork_oak_detection.png";

const post = {
  id: "cork-oak-classification",
  language: "pt",
  title:
    "Deteção de árvores para estimar a altura e a área da copa em montado",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        Este estudo aplica visão por computador para detetar copas de sobreiros
        em montado. Combina imagens RGB de UAV e dados de modelos digitais do
        terreno para estimar a altura e a área da copa de cada árvore. Os dados
        de entrada são imagens RGB e DSM obtidas por UAV, com uma resolução de
        10 cm por píxel. Os resultados incluem polígonos das copas, a altura e
        a área da copa de cada árvore detetada, bem como a cobertura total das
        copas.
      </p>
      <figure>
        <img
          src={corkOakImage}
          alt="Sobreiro detetado visto de cima"
        />
        <figcaption>
          Pequena secção da área florestal antes (à esquerda) e depois (à
          direita) da deteção das árvores.
        </figcaption>
      </figure>
      <p>
        O estudo compara os modelos de deteção por aprendizagem automática
        Detectree2 e YOLOv8 para detetar sobreiros (<em>Quercus suber L.</em>)
        numa área florestal de 60 hectares, na sub-região da Lezíria do Tejo,
        em Portugal, utilizando imagens de UAV. Após a deteção das copas,
        estima-se a altura total de cada árvore; a área da copa é calculada a
        partir dos polígonos detetados. O objetivo é avaliar o desempenho dos
        modelos quanto a (i) precisão da deteção de árvores, (ii) correlação
        entre as estimativas de altura e as medições de campo e (iii)
        correlação entre as estimativas da área da copa e as copas desenhadas
        manualmente com base em pontos GPS recolhidos no terreno, avaliando o
        potencial para o mapeamento de árvores em sistemas agroflorestais de
        grande escala. Com o YOLOv8, os resultados foram F1 de 0,775 na deteção
        das copas, R² de 0,646 na estimativa da altura das árvores e R² de
        0,887 na estimativa da área das copas. Com o Detectree2, foram F1 de
        0,385 na classificação das copas, R² de 0,535 na estimativa da altura
        das árvores e R² de 0,778 na estimativa da área das copas.
      </p>
      <p>
        Este estudo demonstrou o elevado potencial da utilização de imagens de
        UAV, aprendizagem automática e processamento geoespacial para substituir
        a recolha no terreno de dados sobre a altura e a área das copas em
        zonas florestais. Os resultados também apontam para possíveis
        aplicações noutras recolhas de dados, como o diâmetro à altura do
        peito, embora sejam necessários mais estudos e modelação. Uma das
        principais vantagens desta abordagem é permitir calcular a altura e a
        área da copa de todas as árvores de uma área, em vez de extrapolar os
        valores da paisagem a partir de parcelas amostradas. Esta modelação
        poderá reduzir o trabalho de campo necessário para recolher dados em
        aplicações como a estimativa de biomassa.
      </p>
    </>
  ),
};

export default post;
