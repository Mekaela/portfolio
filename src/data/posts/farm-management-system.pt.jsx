import React from "react";
import farmManagementImage from "../../images/antaia.png";

const post = {
  id: "farm-management-system",
  language: "pt",
  title: "Sistema de gestão agrícola",
  byline: "Mekaela Stevenson",
  date: "2025-11-23",
  content: (
    <>
      <p>
        Uma ferramenta de recolha de dados full-stack, desenvolvida com Django
        e PostgreSQL. Concebi e desenvolvi o esquema da base de dados, a lógica
        de back-end e a interface para apoiar a recolha de dados na exploração
        agrícola.
      </p>
      <figure>
        <img
          src={farmManagementImage}
          alt="Projeto de sistema de gestão agrícola"
        />
        <figcaption>
          Acrescente aqui detalhes sobre o sistema e os seus utilizadores.
        </figcaption>
      </figure>
      <p>
        Este é um produto privado destinado a agricultores portugueses. Segue
        o formato do Caderno do Campo, uma forma normalizada de registar as
        práticas de gestão agrícola em Portugal. O sistema permite aos
        agricultores registar essas práticas, incluindo aplicações de
        fertilizantes e pesticidas, rotações de culturas e outras informações
        relevantes. Estes dados podem depois apoiar a tomada de decisões e
        melhorar as práticas de gestão agrícola.
      </p>
    </>
  ),
};

export default post;
