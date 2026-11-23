import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    "nav.tagline": "Data scientist",
    "nav.portfolio": "portfolio",
    "nav.blog": "blog",
    "nav.faq": "FAQ",
    "nav.languageLabel": "Choose language",
    "nav.navigation": "Main navigation",
    "nav.english": "English",
    "nav.portuguese": "Portuguese",
    "hero.role": "Agriculture and Forestry Data Scientist",
    "hero.description":
      "I am a data scientist specialising in agricultural and forestry data. I hold a Masters of Green Data Science from the School of Agronomy at the University of Lisbon, and I have experience with implementation of data management systems, data migrations, computer vision, machine learning, and GIS.\n\n I was previously a software developer and business analyst, and so have worked with the full software development lifecycle, including data migrations and code deployment.",
    "hero.artLabel": "Illustration of connected agricultural field data",
    "hero.fieldNotes": "FIELD NOTES / 01",
    "hero.dataContext": "DATA IN CONTEXT",
    "hero.landscapeLabel": "Abstract contour lines across agricultural fields",
    "hero.clearerPicture": "A clearer picture",
    "hero.field": "FIELD",
    "hero.climate": "CLIMATE",
    "hero.operations": "OPERATIONS",
    "hero.insight": "Insight grounded in real-world context",
    "hero.artCaption": "A connected view of the whole system",
    "projects.eyebrow": "Selected work",
    "projects.title": "Selection of projects that I've built",
    "projects.number": "PROJECT",
    "projects.category1": "Computer Vision, GIS",
    "projects.title1": "Tree detection to estimate tree heights and crown areas in Montado woodland",
    "projects.description1":
      `Applying computer vision models to detect tree crowns, and then estimate each individual tree height and crown area, using UAV RGB and DTM images, applied to Montado cork oak woodlands.  \n
`,
    "projects.category2": "Machine Learning, Regression",
    "projects.title2": "Carbon soil prediction and management tool for farmers",
    "projects.description2":
      "Applying Random Forest regression model to predict the soil organic carbon content of farms.",
    "projects.experience":
      "Before becoming a data scientist, I worked as a Salesforce software developer, and a business analyst across various CRM related projects. Most of my work has been with greenfield projects (i.e. new implementations), and I have experience with the full software lifecycle: from understanding customer needs and building data solutions, to building predictive models, supporting implementation, and helping users make practical decisions with their data.",
    "projects.category3": "Digital agriculture",
    "projects.title3": "Farm management system",
    "projects.description3":
      "A full-stack data collection tool built with Django and PostgreSQL. I designed and built the database schema, backend logic, and front end to support on-farm data acquisition.",
    "projects.nodeField": "LAND",
    "projects.nodeData": "DATA",
    "projects.nodePeople": "PEOPLE",
    "projects.nodeAction": "ACTION",
    "capabilities.eyebrow": "What a project looks like",
    "capabilities.title": "From raw data to estimates and forecasts.",
    "capabilities.summary":
      "I have experience with collating and cleaning data, and putting it in a database, implementing data management systems, and using modelling to predict, estimate and forecast agricultural and forestry variables. If you're not sure if I can help with your project, please reach out and I will investigate if I can help.",
    "capabilities.title1": "Collate and clean data, and put it in a database if desired",
    "capabilities.description1":
      "I work with you to collate the different data sources you have that are useful to your project, including harvest, aerial images, planting data, and many more. I can also plan and manage data collection on your property where you need data to be collected. I can then clean and organise the data, and put it in a database if desired.",
    "capabilities.title2": "Modelling to predict, estimate and forecast agricultural and forestry variables",
    "capabilities.description2":
      "I use statistical and machine learning techniques to build models that can predict, estimate, and forecast various agricultural and forestry variables based on the data you provide.",
    "capabilities.title3": "Provide predictions in the format that's best for you",
    "capabilities.description3":
      "I work with you to provide predictions in a format that you can use and understand. This can include dashboards, applications, or even a solution as simple as a daily email telling you your predictions for the next week or month.",
    "contact.eyebrow": "Start a conversation",
    "contact.titleLine1": "Let's make",
    "contact.titleLine2": "your data",
    "contact.titleEmphasis": "help you.",
    "contact.description":
      "Have an agricultural data challenge or an idea you're ready to explore?",
    "contact.link": "Connect on LinkedIn",
    "blog.title": "Agricultural Data Insights",
    "blog.author": "Mekaela Stevenson",
    "blog.description":
      "I write about agritech, agricultural analytics, and the practical use of data to improve sustainability, productivity, and decision-making across the food and fibre value chain.",
    "post.by": "By",
    "faq.title": "FAQs",
    "faq.intro":
      "Here's a quick overview of how I think, work, and add value.",
    "faq.question1": "What kind of work do I do?",
    "faq.answer1":
      "My work and education has given me experience of the full software cycle of defining customer needs, building software products, building machine learning models to predict, teaching users how to use their software, and supporting users with their implementations and ongoing use of software. I help organisations decide on data management strategies for operational data, and then build models to support decision making and reduce manual fieldwork for farmers, foresters and other related stakeholders.",
    "faq.question2": "What makes my background useful in this space?",
    "faq.answer2":
        "I bring together technical skills in data analysis, software development, and stakeholder communication with a strong understanding of environmental and operational context. That means I can work with both technical teams and end users to turn fragmented data into useful, actionable insight.",
    // "faq.question3": "Why agriculture?",
    // "faq.answer3":
    //     "I grew up on a small farm with horses, and occasionally other stock animals, and my family had cattle and sugarcane farms which I spent a lot of time at. I have always been close to agriculture. Once I started my professional work in IT I knew I wanted to combine it with agriculture and forestry to bring advancements in technology from other fields and academia to agriculture and forestry. ",
  },
  pt: {
    "nav.tagline": "Ciência de dados agrícolas",
    "nav.portfolio": "portfólio",
    "nav.blog": "blog",
    "nav.faq": "Perguntas frequentes",
    "nav.languageLabel": "Selecione o idioma",
    "nav.navigation": "Navegação principal",
    "nav.english": "Inglês",
    "nav.portuguese": "Português",
    "hero.role": "Cientista de dados para a agricultura e a floresta",
    "hero.description":
      "Sou cientista de dados, especializada em dados agrícolas e florestais. Tenho um mestrado em Ciência de Dados Verdes pelo Instituto Superior de Agronomia da Universidade de Lisboa e experiência na implementação de sistemas de gestão de dados, migração de dados, visão por computador, aprendizagem automática e SIG. Ajudo agricultores e profissionais do setor florestal a tomar melhores decisões e a reduzir o trabalho manual necessário para recolher e processar dados.\n\nGosto de transformar dados complexos em ferramentas práticas e análises claras que apoiam decisões sustentáveis na agricultura e na floresta.",
    "hero.artLabel": "Ilustração de dados agrícolas ligados ao terreno",
    "hero.fieldNotes": "NOTAS DE CAMPO / 01",
    "hero.dataContext": "DADOS NO CONTEXTO",
    "hero.landscapeLabel": "Curvas de nível abstratas em terrenos agrícolas",
    "hero.clearerPicture": "Uma visão mais clara",
    "hero.field": "CAMPO",
    "hero.climate": "CLIMA",
    "hero.operations": "OPERAÇÕES",
    "hero.insight": "Análise fundamentada na realidade",
    "hero.artCaption": "Uma visão integrada do sistema",
    "projects.eyebrow": "Trabalho selecionado",
    "projects.title": "Uma seleção de projetos que desenvolvi",
    "projects.number": "PROJETO",
    "projects.category1": "Visão por computador, SIG",
    "projects.title1":
      "Deteção de árvores para estimar a altura e a área da copa em montado",
    "projects.description1":
      "Aplicação de modelos de visão por computador para detetar copas de árvores e estimar a altura e a área da copa de cada árvore, com recurso a imagens RGB de VANT e a modelos digitais do terreno, em montados de sobreiro.",
    "projects.category2": "Aprendizagem automática, regressão",
    "projects.title2":
      "Ferramenta de previsão e gestão do carbono no solo para agricultores",
    "projects.description2":
      "Aplicação de um modelo de regressão Random Forest para prever o teor de carbono orgânico do solo em explorações agrícolas.",
    "projects.experience":
      "Antes de me tornar cientista de dados, trabalhei como programadora Salesforce e analista de negócios em vários projetos relacionados com CRM. A maioria dos meus projetos envolveu novas implementações e tenho experiência em todo o ciclo de desenvolvimento de software: desde compreender as necessidades dos clientes e criar soluções de dados até desenvolver modelos preditivos, apoiar a implementação e ajudar os utilizadores a tomar decisões práticas com os seus dados.",
    "projects.category3": "Agricultura digital",
    "projects.title3": "Sistema de gestão agrícola",
    "projects.description3":
      "Ferramenta de recolha de dados desenvolvida com Django e PostgreSQL. Concebi e desenvolvi o esquema da base de dados, a lógica de back-end e a interface para apoiar a recolha de dados na exploração agrícola.",
    "projects.nodeField": "CAMPO",
    "projects.nodeData": "DADOS",
    "projects.nodePeople": "PESSOAS",
    "projects.nodeAction": "AÇÃO",
    "capabilities.eyebrow": "Como funciona um projeto",
    "capabilities.title": "Dos dados brutos a estimativas e previsões.",
    "capabilities.summary":
      "Tenho experiência na recolha e limpeza de dados, na sua organização em bases de dados, na implementação de sistemas de gestão de dados e na utilização de modelos para prever e estimar variáveis agrícolas e florestais. Se não tiver a certeza de que posso ajudar no seu projeto, entre em contacto comigo e avaliarei como poderei ajudar.",
    "capabilities.title1": "Recolher, limpar e, se desejar, armazenar dados numa base de dados",
    "capabilities.description1":
      "Trabalho consigo para reunir as diferentes fontes de dados úteis para o seu projeto, incluindo dados de colheita, imagens aéreas e dados de plantação, entre outros. Também posso planear e gerir a recolha de dados na sua exploração. Depois, posso limpar e organizar os dados e, se desejar, armazená-los numa base de dados.",
    "capabilities.title2":
      "Modelação para prever e estimar variáveis agrícolas e florestais",
    "capabilities.description2":
      "Utilizo técnicas estatísticas e de aprendizagem automática para criar modelos que permitem prever e estimar diferentes variáveis agrícolas e florestais com base nos dados que me fornecer.",
    "capabilities.title3": "Previsões no formato mais adequado para si",
    "capabilities.description3":
      "Trabalho consigo para disponibilizar previsões num formato fácil de utilizar e compreender. Pode ser um painel de controlo, uma aplicação ou até uma solução simples, como um e-mail diário com previsões para a semana ou o mês seguintes.",
    "contact.eyebrow": "Vamos conversar",
    "contact.titleLine1": "Vamos pôr",
    "contact.titleLine2": "os seus dados",
    "contact.titleEmphasis": "a trabalhar para si.",
    "contact.description":
      "Tem um desafio relacionado com dados agrícolas ou uma ideia que gostaria de explorar?",
    "contact.link": "Conecte-se pelo LinkedIn",
    "blog.title": "Análise de dados agrícolas",
    "blog.author": "Mekaela Stevenson",
    "blog.description":
      "Escrevo sobre agrotecnologia, análise de dados agrícolas e a utilização prática de dados para melhorar a sustentabilidade, a produtividade e a tomada de decisões ao longo da cadeia agroalimentar.",
    "post.by": "Por",
    "faq.title": "Perguntas frequentes",
    "faq.intro": "Segue-se uma breve apresentação da forma como penso, trabalho e contribuo.",
    "faq.question1": "Que tipo de trabalho desenvolvo?",
    "faq.answer1":
      "A minha experiência profissional e formação deram-me contacto com todo o ciclo de desenvolvimento de software: desde identificar as necessidades dos clientes e criar produtos de software até desenvolver modelos de aprendizagem automática para fazer previsões, ensinar os utilizadores e apoiar a implementação e utilização contínua dos sistemas. Ajudo organizações a definir estratégias de gestão de dados operacionais e, depois, a criar modelos que apoiem a tomada de decisões e reduzam o trabalho de campo manual de agricultores, profissionais do setor florestal e outros intervenientes.",
    "faq.question2": "Porquê a agricultura?",
    "faq.answer2":
      "Cresci numa pequena quinta com cavalos e, ocasionalmente, outros animais. A minha família também tinha explorações de gado e cana-de-açúcar que frequentei muitas vezes. Sempre estive próxima da agricultura. Quando comecei a trabalhar profissionalmente em tecnologias de informação, percebi que queria combinar essa área com a agricultura e a floresta, trazendo para estes setores os avanços tecnológicos desenvolvidos noutras áreas e na academia.",
    "faq.question3": "Como contribui a minha experiência para esta área?",
    "faq.answer3":
      "Combino competências técnicas em análise de dados e desenvolvimento de software com comunicação com diferentes públicos e uma compreensão dos contextos ambiental e operacional. Assim, posso trabalhar com equipas técnicas e utilizadores finais para transformar dados dispersos em informação útil e acionável.",
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => (window.localStorage.getItem("portfolio-language") === "pt" ? "pt" : "en")
  );

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] || translations.en[key] || key,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
